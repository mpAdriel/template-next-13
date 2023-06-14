export const formatUnit = (locale: string, num: number) => {
	return locale && (Number(num) || num === 0)
		? new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(num)
		: num
}
