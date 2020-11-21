import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {
    constructor (props) {
        super(props)

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }
        this.converter = this.converter.bind(this)
    }

    converter () {
        let de_para = `${this.props.moedaA}-${this.props.moedaB}`
        let de = `${this.props.moedaA}`
        let url = `https://economia.awesomeapi.com.br/json/all/${de_para}`

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de].low
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                moedaB_valor = parseFloat(moedaB_valor)
                moedaB_valor = moedaB_valor.toLocaleString('pt-BR')
                this.setState({moedaB_valor})
        })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}} />
                <input type="button" value="Converter" onClick={this.converter} />
                <h2>R$ {this.state.moedaB_valor}</h2>
            </div>
        )
    }
}