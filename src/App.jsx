import React from 'react'
import './App.css'

import CurrencyConverter from './components/CurrencyConverter'
import Credits from './components/Credits'
import Footer from './components/Footer'

function App() {
  return (
      <div className="app-container">
        <main>
          <h1 style={{ textAlign: 'center' }}>Currency converter</h1>
          <section>
            <CurrencyConverter />
          </section>
          <Credits />
        </main>
        <Footer />
      </div>
  )
}

export default App
