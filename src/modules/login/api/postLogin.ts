// interfaces
import { TDispatch, TStore } from '@/modules/store/interfaces'
import { EModules, EVerbs } from '@/modules/api/enum'
import { TokensDTO } from '@/modules/api/modules/login/res'
import { PostLoginDTO } from '@/modules/api/modules/login/req'
// actions
import { setLogin, loginValidation } from '../slices/actions'
// resources
import { api } from '@/modules/api/api'
import { isDev } from '@/utils'

export const apiPostLogin =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { isError } = await dispatch(loginValidation())
		if (isError) return

		await api<TokensDTO, PostLoginDTO>({
			verb: EVerbs.POST,
			configVerb: {
				url: 'login',
				data: {
					email: 'user@mail.com',
					password: 'Qwerty1234',
					termsConditions: true,
				},
			},
			permissions: ['ADMIN'],
			callback: {
				success: async response => {
					if (isDev()) console.log('apiPostLogin - Success', response)
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
