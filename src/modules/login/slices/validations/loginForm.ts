// validations
import {
	validateEmail,
	validatePassword,
	validateTermsConditions,
} from '@/modules/form/validations'
// interfaces
import { ILoginError } from '../interfaces'
import { PostLoginDTO } from '@/modules/api/modules/login/req'

export const loginFormValidation = (values: PostLoginDTO) => {
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
