export function groupBy<T, K extends keyof T>(
	array: T[],
	attribute: K
): Array<{ [key in K]: T[] }> {
	const groupedArray: { [key: string]: T[] }[] = []

	array.forEach(function (item) {
		const attributeValue = item[attribute] as unknown as string

		const existingGroupIndex = groupedArray.findIndex(
			group => group[attributeValue]
		)

		if (existingGroupIndex !== -1) {
			groupedArray[existingGroupIndex][attributeValue].push(item)
		} else {
			const newGroup: { [key: string]: T[] } = {}
			newGroup[attributeValue] = [item]
			groupedArray.push(newGroup)
		}
	})

	return groupedArray.map(group => {
		const attributeKey = Object.keys(group)[0] as K
		const attributeValue = group[attributeKey as string]
		const result: { [key in K]: T[] } = {
			[attributeKey]: attributeValue,
		} as { [key in K]: T[] }
		return result
	}) as Array<{ [key in K]: T[] }>
}
