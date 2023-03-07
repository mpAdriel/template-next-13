import { regexEmail, regexPassword } from './Regex'

export const isValidEmail = (email: string) => {
  return regexEmail.test(email.trim())
}

export const validateEmail = (email: string) => {
  if (!email) {
    return 'Required'
  } else if (!isValidEmail(email)) {
    return 'Invalid email'
  }
  return ''
}

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
