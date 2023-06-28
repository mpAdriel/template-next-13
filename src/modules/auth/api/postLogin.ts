// interfaces
import { loginValidation, setLogin } from '../slices/actions'

import { TDispatch, TStore } from '@/modules/store/interfaces'
import { EModules, EVerbs } from '@/modules/api/enum'
import { TokensDTO } from '@/modules/api/modules/login/res'
import { PostLoginDTO } from '@/modules/api/modules/login/req'
// actions
// resources
import { api } from '@/modules/api/api'
import { isDev } from '@/utils'

export const apiPostLogin =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { isError } = await dispatch(loginValidation())

		if (isError) return

		await api<TokensDTO, PostLoginDTO>({
			callback: {
				error: async response => {
					if (isDev()) console.log('apiPostLogin - Error', response)
				},
				success: async response => {
					if (isDev()) console.log('apiPostLogin - Success', response)
				},
			},
			dispatch,
			getState,
			moduleName: EModules.LOGIN,
			permissions: [],
			requestConfig: {
				data: {
					email: 'user@mail.com',
					password: 'Qwerty1234',
				},
				url: 'users/auth/login',
			},
			setLoading: async status =>
				await dispatch(setLogin({ prop: 'isLoading', value: status })),
			verb: EVerbs.POST,
		})
	}
