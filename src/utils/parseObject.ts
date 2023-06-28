// ! WARNING, if you use "rmNullValues" this could happen:
// interface IOb { name: string }
// const ob: IOb = { name: '' }
// const obParsed = parseObject<IOb>(ob, {rmNullValues: true});
// output: {} // obParsed.name is undefined

// resources
import { isEmptyObject } from './isEmptyObject'

export function parseObject<T>(
	obj: T,
	params?: {
		rmNullValues?: boolean
	}
): T {
	const rmNullValues = params?.rmNullValues
	const funcFilterArray = (el: unknown) => {
		if (el === undefined) return false
		if (rmNullValues && !el && el !== 0) return false
		if (
			rmNullValues &&
			typeof el === 'object' &&
			el !== null &&
			isEmptyObject(el)
		)
			return false

		return true
	}

	for (const key in obj) {
		const value = obj[key]

		if (value === undefined) {
			delete obj[key]
		} else if (Array.isArray(value)) {
			const filteredArray = value.filter(el => funcFilterArray(el))

			;(obj[key] as unknown[]) = filteredArray
			filteredArray.forEach((el, i) => {
				if (typeof el === 'object') {
					parseObject(el, params)
				}
				if (Array.isArray(el)) {
					;(obj[key] as unknown[])[i] = el.filter(nestedEl =>
						funcFilterArray(nestedEl)
					)
				}
			})
		} else if (typeof value === 'object') {
			parseObject(value, params)
		} else if (rmNullValues && !value) {
			delete obj[key]
		}
	}

	return obj
}
