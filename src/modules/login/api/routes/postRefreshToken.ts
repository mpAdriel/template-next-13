import { api } from '@/modules/api/api'

// interfaces
import { ICallBack } from '@/modules/api/interfaces/ICallback'
import { TStore } from '@/modules/store/interfaces/TStore'
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { UrlPostLogin } from '../interfaces/PostUser'
import { ETags } from '@/modules/api/interfaces/ETags'
import { UserDTO } from '../dto/user'
import { EVerbs } from '@/modules/api/interfaces/EVerbs'
// actions
import { setLogin } from '../../slices/LoginSlice'
// resources
import { isDev } from '@/utils'

export const apiPostRefreshToken =
	<T>(callback?: ICallBack<T>) =>
	async (dispatch: TDispatch, getState: TStore) => {
		await dispatch(setLogin({ prop: 'isLoading', value: true }))
		await api<UserDTO, undefined>({
			verb: EVerbs.GET,
			configVerb: { url: UrlPostLogin.replace('<userId>', '2') },
			callback: {
				success: async response => {
					if (isDev()) console.log('apiPostRefreshToken - Success', response)
					dispatch(setLogin({ prop: 'email', value: response?.email }))
					await dispatch(setLogin({ prop: 'isLoading', value: false }))
					await callback?.success()
				},
				error: async response => {
					if (isDev()) console.log('apiPostRefreshToken - Error', response)
					await dispatch(setLogin({ prop: 'isLoading', value: false }))
					await callback?.error()
				},
			},
			dispatch,
			getState,
			tag: ETags.REFRESH_TOKEN,
		})
	}
