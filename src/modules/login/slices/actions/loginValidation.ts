// interfaces
import { ISingleError } from '@/modules/form/interfaces/ISingleError'
import { TDispatch } from '@/modules/store/interfaces/TDispatch'
import { TStore } from '@/modules/store/interfaces/TStore'
// resources
import { scrollToError } from '@/modules/form/utils/scrollToError'
import { loginFormValidation } from '../validations/loginForm'
// actions
import { setLogin } from '../LoginSlice'

export const loginValidation =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { email, password, termsConditions } = getState().LoginState
		const errors = loginFormValidation({ email, password, termsConditions })

		const valuesErrors = Object.values(errors) as Array<ISingleError>
		if (valuesErrors.length > 0) scrollToError(valuesErrors[0])

		await dispatch(setLogin({ prop: 'errors', value: errors }))
		return { errors, isError: valuesErrors.length > 0 }
	}
