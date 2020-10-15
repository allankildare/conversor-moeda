import React from 'react';
import './App.css';

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
        <div class="conversor-style">
          <Conversor moedaA="USD" moedaB="BRL"/>
          <Conversor moedaA="CAD" moedaB="BRL"/>
          <Conversor moedaA="EUR" moedaB="BRL"/>
          <Conversor moedaA="GBP" moedaB="BRL"/>
        </div>

        
    </div>
  );
}

export default App;
