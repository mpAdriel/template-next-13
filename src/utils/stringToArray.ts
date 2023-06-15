export const stringToArray = (string: string, split: string) => {
	if (string.length > 0) {
		const array = string.split(split)
		return array.map(item => item.trim())
	}

	return []
}
