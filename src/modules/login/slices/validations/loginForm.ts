// validations
import { validatePassword } from '@/modules/form/validations/password'
import { validateEmail } from '@/modules/form/validations/email'
// interfaces
import { DTOLogin } from '../../api/dto/login'
import { ILoginError } from '../interfaces/ILoginError'
import { validateTermsConditions } from '@/modules/form/validations/termsConditions'

export const loginFormValidation = (values: DTOLogin) => {
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
