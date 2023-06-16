// interfaces
import { ISingleError } from '../interfaces'

export const scrollToError = (error: ISingleError) => {
	document
		.querySelector(`input[name='${error.name}']`)
		?.scrollIntoView({ block: 'end', behavior: 'smooth' })
}
