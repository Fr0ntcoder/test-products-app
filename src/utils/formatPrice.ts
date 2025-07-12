export const formatPrice = (amount: number) => {
	return new Intl.NumberFormat('us-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	}).format(amount)
}
