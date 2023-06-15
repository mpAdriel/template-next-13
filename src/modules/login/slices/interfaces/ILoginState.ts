import { ILoginError } from './ILoginError'

export interface ILoginState {
	email: string
	password: string
	termsConditions: boolean
	errors: ILoginError
	isLoading: boolean
}
