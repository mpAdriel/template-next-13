import { ISingleError } from '@/modules/form/interfaces/ISingleError'

export interface ILoginError {
	email?: ISingleError
	password?: ISingleError
	termsConditions?: ISingleError
}
