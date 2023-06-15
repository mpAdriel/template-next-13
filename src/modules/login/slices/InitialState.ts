import { ILoginState } from './interfaces/ILoginState'

export const INITIAL_STATE = {
	email: '',
	password: '',
	termsConditions: false,
	errors: {},
	isLoading: false,
} as ILoginState
