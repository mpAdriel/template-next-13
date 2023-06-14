export const formatPrice = (
	locale: string,
	amount: number,
	currency: string
) => {
	return locale && amount >= 0 && currency
		? new Intl.NumberFormat(locale, { currency, style: 'currency' }).format(
				amount
		  )
		: `${amount} ${currency}`
}
