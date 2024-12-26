import { useMemo, useState } from 'react'
import { convertCurrency } from './../../services/currency'
import styles from './styles.module.css'
import CurrencyField from './../CurrencyField'
import { debounce } from 'lodash'

const CURRENCIES = [
  { id: 'BRL', name: 'Brazilian Real', icon: '/images/icons/brasil.png' },
  { id: 'USD', name: 'American Dollar', icon: '/images/icons/usa.png' },
  { id: 'EUR', name: 'Euro', icon: '/images/icons/european-union.png' },
  { id: 'CAD', name: 'Canadian Dollar', icon: '/images/icons/canada.png' },
  { id: 'GBP', name: 'Pound Sterling', icon: '/images/icons/union-jack.png' },
]

function CurrencyConverter() {
  const [value, setValue] = useState('1')
  const [convertedValue, setConvertedValue] = useState('0')

  const [baseCurrency, setBaseCurrency] = useState(CURRENCIES[1].id)
  const [targetCurrency, setTargetCurrency] = useState(CURRENCIES[0].id)
  const baseCurrencyData = useMemo(() => {
    return CURRENCIES.find((item) => item.id === baseCurrency)
  }, [baseCurrency])
  const targetCurrencyData = useMemo(() => {
    return CURRENCIES.find((item) => item.id === targetCurrency)
  }, [targetCurrency])

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value)
  }

  async function handleCurrencyConvertion(updatedValue = value) {
    const response = await convertCurrency(baseCurrency, targetCurrency)
    if (response) {
      let currency = response[baseCurrency].low
      let targetCurrencyValue = (parseFloat(updatedValue) * currency).toFixed(2)
      targetCurrencyValue = parseFloat(targetCurrencyValue)
      targetCurrencyValue = targetCurrencyValue.toLocaleString('pt-BR')
      setConvertedValue(targetCurrencyValue)
    }
  }

  const debouncedConversion = useMemo(
    () => debounce(handleCurrencyConvertion, 300),
    [baseCurrency, targetCurrency, value]
  )

  const handleBaseValueChange = (event) => {
    const inputValue = event.target.value
    setValue(inputValue)
    handleCurrencyConvertion(inputValue) // Passa o valor atualizado
  }
    

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value)
  }

  return (
    <div className={styles.converter}>
      <div className={styles.currencyContainer}>
        <CurrencyField
          currentValue={baseCurrencyData}
          currentCurrency={baseCurrency}
          handleCurrencyChange={handleBaseCurrencyChange}
        />

        <div className={styles.currencySwitch}>
          <span>&#x21c4;</span>
        </div>

        <CurrencyField
          currentValue={targetCurrencyData}
          currentCurrency={targetCurrency}
          handleCurrencyChange={handleTargetCurrencyChange}
        />
      </div>

      <form className={styles.currencyForm}>
        <label htmlFor="base-currency-value">Amount</label>
        <input
          type="text"
          id="base-currency-value"
          onChange={handleBaseValueChange}
          defaultValue="1"
        />

        <label htmlFor="target-currency-value">Converted to</label>
        <input
          type="text"
          id="target-currency-value"
          readOnly
          value={`${convertedValue} ${targetCurrency}`}
        />
      </form>

      {/* <input
        type="button"
        value="Converter"
        onClick={handleCurrencyConvertion}
        defaultValue={value}
      />
      <div>{convertedValue}</div> */}
    </div>
  )
}
export default CurrencyConverter
