const currency = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
})

export function formatAmount(amount) {
	return currency.format(amount)
}
