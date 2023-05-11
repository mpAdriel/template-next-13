import { regexPassword } from '../regex/password'

export const isValidPassword = (password: string) => {
  return regexPassword.test(password.trim())
}

export const validatePassword = (password: string) => {
  if (!password) {
    return 'Required'
  } else if (!isValidPassword(password)) {
    return 'Invalid password'
  }
}
