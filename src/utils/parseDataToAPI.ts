import { parseObject } from './parseObject'

export const parseDataToAPI = <T>(data: T): T => {
	return parseObject(data) as T
}
