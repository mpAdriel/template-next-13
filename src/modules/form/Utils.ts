import { InterfaceValidateUnique } from './Interfaces'

export const scrollToError = (error: InterfaceValidateUnique) => {
  document.querySelector(`input[name='${error.name}']`)?.scrollIntoView({ block: 'end', behavior: 'smooth' })
}
