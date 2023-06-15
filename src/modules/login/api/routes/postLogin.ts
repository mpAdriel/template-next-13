import { api } from '@/modules/api/api'

// interfaces
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { TStore } from '@/modules/store/interfaces/TStore'
import { IPostUser, UrlPostLogin } from '../interfaces/PostUser'
import { EModules } from '@/modules/api/enum/EModules'
import { EVerbs } from '@/modules/api/enum/EVerbs'
// actions
import { setLogin } from '../../slices/LoginSlice'
import { loginValidation } from '../../slices/actions/loginValidation'
// resources
import { isDev } from '@/utils'

export const apiPostLogin =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { isError } = await dispatch(loginValidation())
		if (isError) return

		await api<IPostUser, IPostUser>({
			verb: EVerbs.POST,
			configVerb: {
				url: UrlPostLogin,
				data: {
					body: 'This is my new post',
					title: 'New post',
					userId: 1,
				},
			},
			permissions: ['MANAGE_PYMES'],
			callback: {
				success: async response => {
					if (isDev()) console.log('apiPostLogin - Success', response)
					// dispatch(setLogin({ prop: 'email', value: response?.title }))
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
