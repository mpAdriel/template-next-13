import { ISingleError } from '@/modules/form/interfaces'

export interface ISetPasswordError {
	currentPassword?: ISingleError
	newPassword?: ISingleError
	repeatNewPassword?: ISingleError
}

export interface ISetPasswordState {
	currentPassword: string
	newPassword: string
	repeatNewPassword: string
	isLoading: boolean
	error: ISetPasswordError
}
