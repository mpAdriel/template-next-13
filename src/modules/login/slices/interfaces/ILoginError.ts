import { ISingleError } from '@/modules/form/interfaces'

export interface ILoginError {
	email?: ISingleError
	password?: ISingleError
	termsConditions?: ISingleError
}
