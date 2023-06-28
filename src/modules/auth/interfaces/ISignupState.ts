import { ISingleError } from '@/modules/form/interfaces'

export interface ISignupError {
	email?: ISingleError
	password?: ISingleError
	company?: ISingleError
	firstname?: ISingleError
	lastname?: ISingleError
	username?: ISingleError
}

export interface ISignupState {
	email: string
	password: string
	company: string
	firstname: string
	lastname: string
	username: string
	isLoading: boolean
	error: ISignupError
}
