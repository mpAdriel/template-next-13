export const setParams = (
	prop: string,
	value: string,
	props: { history: any; search: string; pathname: string }
) => {
	const { history, search, pathname } = props

	const params = new URLSearchParams(search)

	if (value) {
		params.set(prop, value)
	} else params.delete(prop)

	const newParams = params.toString()

	if (history && newParams) {
		history.replace(`${pathname}?${newParams}`)
	}
}
