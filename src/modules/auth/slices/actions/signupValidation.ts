// actions
import { setSignup } from '.'

// interfaces
import { ISingleError } from '@/modules/form/interfaces'
import { TDispatch, TStore } from '@/modules/store/interfaces'
// resources
import { scrollToError } from '@/modules/form/utils'
import { signupFormValidation } from '@/modules/auth/validations'

export const signupValidation =
	() => async (dispatch: TDispatch, getState: TStore) => {
		const { email, company, firstname, lastname, password, username } =
			getState().AuthState.signup
		const error = signupFormValidation({
			company,
			email,
			firstname,
			lastname,
			password,
			username,
		})

		const valuesErrors: Array<ISingleError> = Object.values(error)

		if (valuesErrors.length > 0) scrollToError(valuesErrors[0])

		await dispatch(setSignup({ prop: 'error', value: error }))

		return { error, isError: valuesErrors.length > 0 }
	}
