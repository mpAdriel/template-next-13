
// resources
import { ISingleError } from '../form/Interfaces'

export interface ILoginError {
  email?: ISingleError,
  password?: ISingleError
}

export interface ILogin {
  email: string,
  password: string,
  errors: ILoginError,
  isLoading: boolean,
}
