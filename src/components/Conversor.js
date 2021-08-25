import React, { useState } from 'react'
import './Conversor.css'

export default function Conversor({moedaA, moedaB}) {
    const [state, setState] = useState({
        moedaA_valor: "",
        moedaB_valor: 0
    })

    function converter() {
        let de_para = `${moedaA}-${moedaB}`
        let de = `${moedaA}`
        let url = `https://economia.awesomeapi.com.br/json/all/${de_para}`

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de].low
                let moedaB_valor = (parseFloat(state.moedaA_valor) * cotacao).toFixed(2)
                moedaB_valor = parseFloat(moedaB_valor)
                moedaB_valor = moedaB_valor.toLocaleString('pt-BR')
                setState({moedaB_valor})
        })
    }

    return (
        <div className="conversor">
            <h2>{moedaA} para {moedaB}</h2>
            <input type="text" onChange={(event) => {setState({moedaA_valor:event.target.value})}} />
            <input type="button" value="Converter" onClick={converter} />
            <h2>R$ {state.moedaB_valor}</h2>
        </div>
    )
}