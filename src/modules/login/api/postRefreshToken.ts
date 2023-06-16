// interfaces
import { EVerbs, ETags } from '@/modules/api/enum'
import { ICallBack } from '@/modules/api/interfaces'
import { TokensDTO } from '@/modules/api/modules/login/res'
import { TDispatch, TStore } from '@/modules/store/interfaces'
// actions
import { setLogin } from '../slices/actions'
// resources
import { api } from '@/modules/api/api'
import { isDev } from '@/utils'

export const apiPostRefreshToken =
	<T>(callback?: ICallBack<T>) =>
	async (dispatch: TDispatch, getState: TStore) => {
		await api<TokensDTO, undefined>({
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
