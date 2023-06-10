import { ILogin } from './interfaces/ILogin'

export const INITIAL_STATE = {
	email: '',
	password: '',
	termsConditions: false,
	errors: {},
	isLoading: false,
} as ILogin
