export const getParams = async (
	enableKeys: string[],
	saveData: (prop: string, value: string) => {},
	props: { history: any; pathname: string; search: string }
) => {
	const { history, pathname, search } = props

	const params = new URLSearchParams(search)

	for (const [key, value] of params) {
		if (!enableKeys.includes(key)) {
			params.delete(key)
		} else await saveData(key, value)
	}

	if (history && pathname) history?.replace(`${pathname}?${params.toString()}`)
}
