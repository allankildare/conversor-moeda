import styles from './styles.module.css'

const CURRENCIES = [
  { id: 'BRL', name: 'Brazilian Real', icon: '/images/icons/brasil.png' },
  { id: 'USD', name: 'American Dollar', icon: '/images/icons/usa.png' },
  { id: 'EUR', name: 'Euro', icon: '/images/icons/european-union.png' },
  { id: 'CAD', name: 'Canadian Dollar', icon: '/images/icons/canada.png' },
  { id: 'GBP', name: 'Pound Sterling', icon: '/images/icons/union-jack.png' },
]

function CurrencyField({
  currentValue,
  currentCurrency = 'BRL',
  handleCurrencyChange,
}) {
  return (
    <div className={styles.currencyField}>
      <img src={currentValue.icon} className={styles.countryFlag} />
      <select
        value={currentCurrency}
        onChange={handleCurrencyChange}
        name="currency-select"
        className={styles.currencySelect}
      >
        {CURRENCIES.map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyField
