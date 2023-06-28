// actions
import { setLogin } from '.'

// interfaces
import { ISingleError } from '@/modules/form/interfaces'
import { TDispatch, TStore } from '@/modules/store/interfaces'
// resources
import { scrollToError } from '@/modules/form/utils'
import { loginFormValidation } from '@/modules/auth/validations'

export const loginValidation =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { email, password } = getState().AuthState.login

		const error = loginFormValidation({ email, password })

		const valuesErrors: Array<ISingleError> = Object.values(error)
		if (valuesErrors.length > 0) scrollToError(valuesErrors[0])

		await dispatch(setLogin({ prop: 'error', value: error }))
		return { error, isError: valuesErrors.length > 0 }
	}
