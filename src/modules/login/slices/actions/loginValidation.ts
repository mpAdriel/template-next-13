// interfaces
import { ISingleError } from '@/modules/form/interfaces'
import { TDispatch, TStore } from '@/modules/store/interfaces'
// resources
import { scrollToError } from '@/modules/form/utils'
import { loginFormValidation } from '../validations/loginForm'
// actions
import { setLogin } from '../actions'

export const loginValidation =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { email, password, termsConditions } = getState().LoginState
		const errors = loginFormValidation({ email, password, termsConditions })

		const valuesErrors = Object.values(errors) as Array<ISingleError>
		if (valuesErrors.length > 0) scrollToError(valuesErrors[0])

		await dispatch(setLogin({ prop: 'errors', value: errors }))
		return { errors, isError: valuesErrors.length > 0 }
	}
