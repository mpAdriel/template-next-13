import { parseObject } from './'

export const parseObjectToFilter = (object: object): string => {
	const parsedObject = parseObject(object)
	const params = new URLSearchParams({ ...parsedObject })

	return params.toString()
}
