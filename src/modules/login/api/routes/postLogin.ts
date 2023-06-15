import { api } from '@/modules/api/api'

// interfaces
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { TStore } from '@/modules/store/interfaces/TStore'
import { IPostUser, UrlPostLogin } from '../interfaces/PostUser'
import { EModules } from '@/modules/EModules'
import { EVerbs } from '@/modules/api/interfaces/Interfaces'
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

		await api<IPostUser>({
			verb: EVerbs.POST,
			configVerb: {
				url: UrlPostLogin,
				data: JSON.stringify({
					body: 'This is my new post',
					title: 'New post',
					userId: 1,
				} as IPostUser),
			},
			permission: {
				value: await hasPermission(['ADMIN'], 'ADMIN'),
				permission: 'ADMIN',
			},
			callback: {
				success: async response => {
					if (isDev()) console.log('apiPostLogin - Success', response)
					dispatch(setLogin({ prop: 'email', value: response?.title }))
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
