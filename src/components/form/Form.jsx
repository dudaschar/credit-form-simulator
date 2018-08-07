import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import MaskedInput from 'react-text-mask'
import "./form.css"
import jsonData from "./form-content"

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      rgNumber: '',
      rgDate: '',
      rgDep: 'select',
      gender: '',
      numberValid: false,
      dateValid: false,
      DepValid: false,
      genderValid: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  fetchData() {
    let data
    let options = []

    fetch({jsonData})
    .then(data = jsonData)
  
    for (let i = 0; i < data.orgao_emissor.length; i++) {
      options.push(
        <option key={i} value={data.orgao_emissor[i].value}>{data.orgao_emissor[i].label}</option>
      ) 
    }
    return options
  }
  

  render() {
    return (
      <form className="form">
        <div className="form__rg">
          <div className="form__rg--input">
            <label htmlFor="n-rg">Número do RG</label>
            <input
              value={this.state.rgNumber}
              onChange={this.handleChange}
              id="number-rg"
              type="text"
              name="rgNumber"
            />
            <span>-</span>
          </div>
          <div className="form__rg--input">
            <label htmlFor="d-rg">Data de emissão</label>
            <MaskedInput
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              value={this.state.rgDate}
              guide={false}
              d="date-rg"
              onChange={this.handleChange}
              name="rgDate"
              type="text"
            />
            <span>-</span>
          </div>
          <div className="form__rg--input">
            <label htmlFor="e-rg">Órgão expedidor</label>
            <select
              id="dep-rg"
              name="rgDep"
              onChange={this.handleChange}
            >
              {this.fetchData()}
            </select>
           
          </div>
        </div>
        <div className="form__gender">
          <p className="form__gender--title">Gênero</p>
          <label htmlFor="g-man">Masculino</label>
          <input
            checked={this.state.gender === "Masculino"}
            onChange={this.handleChange}
            id="g-man"
            name="gender"
            type="radio"
            value="Masculino"
          />
          <span>-</span>
          <label htmlFor="g-woman">Feminino</label>
          <input
            checked={this.state.gender === "Feminino"}
            onChange={this.handleChange}
            id="g-woman"
            name="gender"
            type="radio"
            value="Feminino"
          />
          <span>-</span>
          <label htmlFor="g-other">Outro</label>
          <input
            checked={this.state.gender === "Outro"}
            onChange={this.handleChange}
            id="g-other"
            name="gender"
            type="radio"
            value="Outro"
          />
        </div>
        <button className="form__button">Continuar</button>
      </form>
    )
  }
}

export default Form