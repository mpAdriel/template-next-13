// interfaces
import { ICallBack } from '@/modules/api/interfaces/ICallback'
import { TStore } from '@/modules/store/interfaces/TStore'
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { EVerbs } from '@/modules/api/enum/EVerbs'
import { ETags } from '@/modules/api/enum/ETags'
import { IGetUserDetailDTO } from '@/modules/api/dto/user/IGetUserDetailDTO'
// actions
import { setLogin } from '../slices/LoginSlice'
// resources
import { api } from '@/modules/api/api'
import { isDev } from '@/utils'

export const apiPostRefreshToken =
	<T>(callback?: ICallBack<T>) =>
	async (dispatch: TDispatch, getState: TStore) => {
		await api<IGetUserDetailDTO, undefined>({
			verb: EVerbs.GET,
			configVerb: { url: 'refreshToken' },
			callback: {
				success: async response => {
					if (isDev()) console.log('apiPostRefreshToken - Success', response)
					await callback?.success()
				},
				error: async response => {
					if (isDev()) console.log('apiPostRefreshToken - Error', response)
					await callback?.error()
				},
			},
			setLoading: async status =>
				await dispatch(setLogin({ prop: 'isLoading', value: status })),
			dispatch,
			getState,
			tag: ETags.REFRESH_TOKEN,
		})
	}
