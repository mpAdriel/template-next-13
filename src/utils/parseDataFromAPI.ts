import { parseCodeHTMLToString } from './parseCodeHTMLToString'
import { parseObject } from './parseObject'

export const parseDataFromAPI = <T>(data: T): T => {
	if (data) data = parseObject(data) as T

	return data
		? (JSON.parse(parseCodeHTMLToString(JSON.stringify(data))) as T)
		: data
}
