// actions
import { setSignup, signupValidation } from '../slices/actions'

// interfaces
import { TDispatch, TStore } from '@/modules/store/interfaces'
import { EModules, EVerbs } from '@/modules/api/enum'
import { PostSignupDTO } from '@/modules/api/modules/signup/req'
// resources
import { api } from '@/modules/api/api'
import { isDev } from '@/utils'

export const apiPostSignup =
	(moduleName: string) => async (dispatch: TDispatch, getState: TStore) => {
		const { isError } = await dispatch(signupValidation())

		if (isError) return

		await api<{}, PostSignupDTO>({
			callback: {
				error: async response => {
					if (isDev()) console.log('apiPostSignup - Error', response)
				},
				success: async response => {
					if (isDev()) console.log('apiPostSignup - Success', response)
				},
			},
			dispatch,
			getState,
			moduleName: EModules.SIGNUP,
			permissions: [],
			requestConfig: {
				data: {
					company: 'Company SL',
					email: 'user@mail.com',
					firstname: 'User',
					lastname: 'Smith',
					password: 'Qwerty1234',
					username: 'User Smith',
				},
				url: `${moduleName}/auth/signup`,
			},
			setLoading: async status =>
				await dispatch(setSignup({ prop: 'isLoading', value: status })),
			verb: EVerbs.POST,
		})
	}
