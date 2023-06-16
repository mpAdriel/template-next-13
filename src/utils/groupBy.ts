export function groupBy<T, K extends keyof T>(
	array: T[],
	attribute: K
): Array<{ key: T[K]; value: T[] }> {
	const groupedArray: { [key: string]: T[] }[] = []

	array.forEach(function (item) {
		const attributeValue = item[attribute] as unknown as T[K] & string

		const existingGroup = groupedArray.find(
			group => group[attributeValue] !== undefined
		)

		if (existingGroup) {
			existingGroup[attributeValue].push(item)
		} else {
			const newGroup: { [key: string]: T[] } = {}
			newGroup[attributeValue] = [item]
			groupedArray.push(newGroup)
		}
	})

	return groupedArray.map(group => {
		const attributeKey = Object.keys(group)[0]
		const attributeValue = group[attributeKey as keyof typeof group]
		return { key: attributeValue[0][attribute], value: attributeValue }
	})
}
