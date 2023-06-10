export const validateTermsConditions = (value: boolean) => {
	if (!value) {
		return 'Required, you must accept terms and conditions'
	}
	return ''
}
