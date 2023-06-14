// export function parseObject<T>(obj: T): T {
// 	for (const key in obj) {
// 		const value = obj[key]

// 		if (value === undefined) {
// 			delete obj[key]
// 		} else if (Array.isArray(value)) {
// 			obj[key] = value.filter(el => el !== undefined)
// 			obj[key].forEach((el, i) => {
// 				if (typeof el === 'object') {
// 					parseObject(el)
// 				}
// 				if (Array.isArray(el)) {
// 					obj[key][i] = el.filter(nestedEl => nestedEl !== undefined)
// 				}
// 			})
// 		} else if (typeof value === 'object') {
// 			parseObject(value)
// 		}
// 	}

// 	return obj
// }
