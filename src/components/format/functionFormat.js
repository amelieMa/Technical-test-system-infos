export const handleFormatNumber = (locale, number, style, id) => {
  if (number === undefined || number === null || isNaN(number)) {
    return '-'
  } else if(style === 'price') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }).format(number)
  } else if(style === 'percent') {
    return new Intl.NumberFormat(locale, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'EUR' }).format(number)
  }
}
