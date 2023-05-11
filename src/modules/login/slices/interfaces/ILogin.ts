import { ILoginError } from './ILoginError'

export interface ILogin {
  email: string,
  password: string,
  errors: ILoginError,
  isLoading: boolean,
}
