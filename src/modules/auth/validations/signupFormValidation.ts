// interfaces
import { ISignupError } from '../interfaces'
// interfaces
import { PostSignupDTO } from '@/modules/api/modules/signup/req'
// validations
import { validateEmail, validatePassword } from '@/modules/form/validations'

export const signupFormValidation = (values: PostSignupDTO) => {
	const error = {} as ISignupError

	const email = validateEmail(values.email)
	if (email) error.email = { name: 'email', error: email }

	const password = validatePassword(values.password)
	if (password) error.password = { name: 'password', error: password }

	const company = ''
	if (company) error.company = { name: 'company', error: company }

	const firstname = ''
	if (firstname) error.firstname = { name: 'firstname', error: firstname }

	const lastname = ''
	if (lastname) error.lastname = { name: 'lastname', error: lastname }

	const username = ''
	if (username) error.username = { name: 'username', error: username }

	return error
}
