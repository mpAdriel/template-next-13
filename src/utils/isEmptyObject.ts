export const isEmptyObject = (ob: object) => {
	const arrObject = Object.entries(ob)

	return arrObject?.length === 0
}
