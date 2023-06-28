import { ISingleError } from '@/modules/form/interfaces'

export interface IChangeEmailPassError {
	email?: ISingleError
	password?: ISingleError
}

export interface IChangeEmailPassState {
	email: string
	password: string
	isLoading: boolean
	error: IChangeEmailPassError
}
