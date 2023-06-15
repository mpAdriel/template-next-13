// validations
import {
	validateEmail,
	validatePassword,
	validateTermsConditions,
} from '@/modules/form/validations'
// interfaces
import { IPostLoginDTO } from '@/modules/api/dto/login/IPostLoginDTO'
import { ILoginError } from '../interfaces/ILoginError'

export const loginFormValidation = (values: IPostLoginDTO) => {
	const errors = {} as ILoginError

	const email = validateEmail(values.email)
	if (email) errors.email = { name: 'email', error: email }

	const password = validatePassword(values.password)
	if (password) errors.password = { name: 'password', error: password }

	const termsConditions = validateTermsConditions(values.termsConditions)
	if (termsConditions)
		errors.termsConditions = {
			name: 'termsConditions',
			error: termsConditions,
		}

	return errors
}
