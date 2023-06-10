import { api } from '@/modules/api/api'

// interfaces
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { TStore } from '@/modules/store/interfaces/TStore'
import { IGetUser, UrlPostLogin } from '../interfaces/GetUser'
import { EModules } from '@/modules/EModules'
// actions
import { setLogin } from '../../slices/LoginSlice'
import { loginValidation } from '../../slices/actions/loginValidation'
// resources
import { isDev } from '@/utils/isDev'
import { hasPermission } from '@/modules/user/hasPermission'

export const apiPostLogin =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { isError } = await dispatch(loginValidation())
		if (isError) return

		await api<IGetUser>({
			verb: 'GET',
			configVerb: { url: UrlPostLogin.replace('<userId>', '1') },
			permission: {
				value: await hasPermission([''], 'ADMIN'),
				permission: 'ADMIN',
			},
			callback: {
				success: async response => {
					if (isDev()) console.log('apiPostLogin - Success', response)
					dispatch(setLogin({ prop: 'email', value: response?.email }))
					// setTimeout(() => {
					//   setInterval(async () => {
					//     await dispatch(apiPostRefreshToken())
					//   }, 60000)
					// }, 60000)
				},
				error: async response => {
					if (isDev()) console.log('apiPostLogin - Error', response)
				},
			},
			setLoading: async status =>
				await dispatch(setLogin({ prop: 'isLoading', value: status })),
			dispatch,
			getState,
			module: EModules.LOGIN,
		})
	}
