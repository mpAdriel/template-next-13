import { ISingleError } from './Interfaces'

export const scrollToError = (error: ISingleError) => {
  document.querySelector(`input[name='${error.name}']`)?.scrollIntoView({ block: 'end', behavior: 'smooth' })
}
