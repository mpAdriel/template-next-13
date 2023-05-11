import { ILogin } from './interfaces/ILogin'

export const INITIAL_STATE = {
  email: '',
  password: '',
  errors: {},
  isLoading: false
} as ILogin
