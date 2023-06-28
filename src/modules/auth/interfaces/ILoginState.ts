import { ISingleError } from '@/modules/form/interfaces'

export interface ILoginError {
	email?: ISingleError
	password?: ISingleError
}

export interface ILoginState {
	email: string
	password: string
	isLoading: boolean
	error: ILoginError
}
