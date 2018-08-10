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
      gender: '',
      numberValid: false,
      dateValid: false,
      depValid: false,
      genderValid: false,
      formValid: false,
      isButtonDisabled: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value },
      () => {
        this.validateField(name, value)
        
      })
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
    this.setState({ formValid: this.state.numberValid && this.state.dateValid && this.state.genderValid && this.state.depValid }, () => {
      const formValid = this.state.formValid
      if (formValid) {
        this.setState({ isButtonDisabled: false })
      }
    })
  }

  fetchAPI() {
    
  }


  handleSubmit(event) {
    event.preventDefault()
    const formValid = this.state.formValid

    const { rgNumber, rgDate, rgDep, gender } = this.state

    console.log(formValid)
    if (formValid) {
      
      fetch("https://4e848538-4e18-4e32-803c-6f18e8e7468d.mock.pstmn.io/geru", {
        method: 'POST',
        headers: new Headers({
          'Access-Control-Request-Headers': 'access-control-allow-headers,access-control-allow-origin,content-type',
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Allow-Origin': '*',

        }),
        body: { rgNumber, rgDate, rgDep, gender },
      }).then((response) => {
        if (response.status === 201) {
          alert('Formulário enviado com sucesso')
        }
      })

    } else {
      this.setState({isButtonDisabled: true})
      }
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
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form__rg">
          <div className="form__rg--input input__number">
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
          <div className="form__rg--input input__date">
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
          <div className="form__rg--input input__dep">
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
          <input
            checked={this.state.gender === "masculino"}
            onChange={this.handleChange}
            id="g-man"
            name="gender"
            type="radio"
            value="masculino"
          />
          <label htmlFor="g-man">Masculino</label>
          <span>-</span>
          <input
            checked={this.state.gender === "feminino"}
            onChange={this.handleChange}
            id="g-woman"
            name="gender"
            type="radio"
            value="feminino"
          />
          <label htmlFor="g-woman">Feminino</label>
          <span>-</span>
          <input
            checked={this.state.gender === "outro"}
            onChange={this.handleChange}
            id="g-other"
            name="gender"
            type="radio"
            value="outro"
          />
          <label htmlFor="g-other">Outro</label>
        </div>
        <button disabled={this.state.isButtonDisabled} className="form__button">Continuar</button>
      </form>
    )
  }
}

export default Form