// interfaces
import { ILoginError } from '../interfaces'
// interfaces
import { PostLoginDTO } from '@/modules/api/modules/login/req'
// validations
import { validateEmail, validatePassword } from '@/modules/form/validations'

export const loginFormValidation = (values: PostLoginDTO) => {
	const error: ILoginError = {}

	const email = validateEmail(values.email)
	if (email) error.email = { name: 'email', error: email }

	const password = validatePassword(values.password)
	if (password) error.password = { name: 'password', error: password }

	return error
}
