import { regexEmail } from '../regex/email'

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
