// interfaces
import { EVerbs, ETags } from '@/modules/api/enum'
import { ICallBack } from '@/modules/api/interfaces'
import { TokensDTO } from '@/modules/api/modules/login/res'
import { TDispatch, TStore } from '@/modules/store/interfaces'
// actions
import { setTokens } from '@/modules/user/slices/actions'
// resources
import { api } from '@/modules/api/api'
import { isDev } from '@/utils'

export const apiPostRefreshToken =
	<T>(moduleName: string, callback?: ICallBack<T>) =>
	async (dispatch: TDispatch, getState: TStore) => {
		const refreshToken = getState().UserState.refreshToken

		await api<TokensDTO, { refreshToken: string }>({
			callback: {
				error: async response => {
					if (isDev()) console.log('apiPostRefreshToken - Error', response)
					await callback?.error()
				},
				success: async response => {
					if (isDev()) console.log('apiPostRefreshToken - Success', response)
					await dispatch(setTokens(response!))
					await callback?.success()
				},
			},
			dispatch,
			getState,
			requestConfig: {
				data: { refreshToken },
				url: `${moduleName}/auth/refreshToken`,
			},
			tag: ETags.REFRESH_TOKEN,
			verb: EVerbs.GET,
		})
	}
