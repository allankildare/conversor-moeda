export async function convertCurrency(baseCurrency, targetCurrency) {
  const apiUrl = 'https://economia.awesomeapi.com.br/json/all'

  try {
    const response = await fetch(`${apiUrl}/${baseCurrency}-${targetCurrency}`)
    const responseJSON = await response.json()

    return responseJSON
  } catch(error) {
    console.error('Error fetching currency conversion data:', error);
    throw new Error(error)
  }
}