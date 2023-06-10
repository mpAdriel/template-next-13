import { ILoginError } from './ILoginError'

export interface ILogin {
	email: string
	password: string
	termsConditions: boolean
	errors: ILoginError
	isLoading: boolean
}
