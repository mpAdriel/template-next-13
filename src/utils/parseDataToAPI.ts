import { parseObject } from './'

export const parseDataToAPI = <T>(data: T): T => {
	return parseObject(data) as T
}
