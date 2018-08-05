import React from 'react'
import PropTypes from 'prop-types'
import './product.css'

const Product = ({name, cpf, value, deadline, goal}) => (
  <div className="product">
    <div className="product__customer">
      <h4 className="product__title">Me chamo:</h4>
      <p className="product__response">{name}</p>
      <p className="product__s-number">
        <span className="product__title">CPF: </span>{cpf}
      </p>
    </div>
    <div className="product__price">
      <h4 className="product__title">Preciso de:</h4>
      <p className="product__response">R${value}</p>
    </div>
    <div className="product__payment">
      <h4 className="product__title">Quero Pagar em</h4>
      <p className="product__response">{deadline} vezes</p>
    </div>
    <div className="product__goal">
      <h4 className="product__title">Para:</h4>
      <p className="product__response">{goal}</p>
    </div>
   
  </div>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
}

export default Product