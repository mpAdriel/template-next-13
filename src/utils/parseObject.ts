// ?Whenever this method is used, an "as" must be assigned because it does not return the typed object.
export function parseObject(obj: any): any {
	for (const key in obj) {
		const value = obj[key]

		if (value === undefined) {
			delete obj[key]
		} else if (Array.isArray(value)) {
			obj[key] = value.filter((el: any) => el !== undefined)
			obj[key].forEach((el: any, i: number) => {
				if (typeof el === 'object') {
					parseObject(el)
				}
				if (Array.isArray(el)) {
					obj[key][i] = el.filter(nestedEl => nestedEl !== undefined)
				}
			})
		} else if (typeof value === 'object') {
			parseObject(value)
		}
	}

	return obj
}
