import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import "./form.css"
import jsonData from "./form-content"

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      rgNumber: '',
      rgDate: '',
      rgDep: 'select',
      department: [],
      gender: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // renderOptions = ({ data }) => {
  //   let options = []
  //   for (let i = 0; i < data.length; i++) {
  //     options.push(
  //       <option value={data[i].value}>
  //         {data[i].label}
  //       </option>
  //     )
  //   }
  //   return options
  // }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log([event.target.name], event.target.value)
  }

  // componentDidMount() {
  //   let content
  //   fetch('./form-content.json')
  //   .then( response => {
  //     return response.json()
  //   }).then( console.log())
  // }

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
            <input
              value={this.state.rgDate}
              onChange={this.handleChange}
              id="date-rg"
              type="text"
              name="rgDate"
            />
            <span>-</span>
          </div>
          <div className="form__rg--input">
              <label htmlFor="e-rg">Órgão expedidor</label>
              <select
                id="dep-rg"
                name="rgDep"
              >
                <option value="select">
                  Selecione
                </option>
                {/* <Fetch
                  url="./form-content"
                  render={this.renderOptions}
                >
                </Fetch> */}
              </select>
           
          </div>
        </div>
        <div className="form__gender">
          <p>Gênero</p>
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