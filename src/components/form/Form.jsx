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
      rgDep: '',
      gender: 'masculino',
      numberValid: false,
      dateValid: false,
      depValid: false,
      genderValid: false,
      formValid: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value },
      () => { this.validateField(name, value) })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let numberValid = this.state.numberValid
    let dateValid = this.state.dateValid
    let depValid = this.state.depValid
    let genderValid = this.state.genderValid

    switch (fieldName) {
      case 'rgNumber':
        numberValid = value !== ""
        break;
      case 'rgDate':
        dateValid = value.length >= 10
        break;
      case 'rgDep':
        depValid = value !== ""
        break;
      case 'gender':
        genderValid = value !== ""
        break;
      default:
        break;
    }
    this.setState({
      numberValid: numberValid,
      dateValid: dateValid,
      depValid: depValid,
      genderValid: genderValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.numberValid && this.state.dateValid });
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
            checked={this.state.gender === "masculino"}
            onChange={this.handleChange}
            id="g-man"
            name="gender"
            type="radio"
            value="masculino"
          />
          <span>-</span>
          <label htmlFor="g-woman">Feminino</label>
          <input
            checked={this.state.gender === "feminino"}
            onChange={this.handleChange}
            id="g-woman"
            name="gender"
            type="radio"
            value="feminino"
          />
          <span>-</span>
          <label htmlFor="g-other">Outro</label>
          <input
            checked={this.state.gender === "outro"}
            onChange={this.handleChange}
            id="g-other"
            name="gender"
            type="radio"
            value="outro"
          />
        </div>
        <button disabled={!this.state.formValid} className="form__button">Continuar</button>
      </form>
    )
  }
}

export default Form