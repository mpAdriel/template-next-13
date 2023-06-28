import { IAuthState } from '../interfaces'

export const INITIAL_STATE = {
	changeEmailPass: { email: '', error: {}, isLoading: false, password: '' },
	login: { email: '', error: {}, isLoading: false, password: '' },
	signup: {
		email: '',
		error: {},
		firstname: '',
		isLoading: false,
		company: '',
		lastname: '',
		password: '',
		username: '',
	},
	setPassword: {
		currentPassword: '',
		error: {},
		isLoading: false,
		newPassword: '',
		repeatNewPassword: '',
	},
} as IAuthState
