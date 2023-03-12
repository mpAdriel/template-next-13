import { validatePassword, validateEmail } from '../form/Validations'
import { DTOLogin } from './api/DTO'
import { InterfaceLoginError } from './Interfaces'

export const loginFormValidation = (values: DTOLogin) => {
  const errors = {} as InterfaceLoginError

  const email = validateEmail(values.email)
  if (email) errors.email = { name: 'email', error: email }
  const password = validatePassword(values.password)
  if (password) errors.password = { name: 'password', error: password }

  // Puedo recogerlo mediante DOM, asi: document.querySelector("input[name='email']")
  return errors
}
