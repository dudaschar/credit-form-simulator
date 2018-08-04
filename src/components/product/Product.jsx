import React from 'react'
import './product.css'

const Product = () => (
  <div className="product">
    <div className="product__customer">
      <h4 className="product__title">Me chamo:</h4>
      <p className="product__response">Paul Irish</p>
      <p className="product__s-number">
        <span className="product__title">CPF: </span>762.888.176-92
      </p>
    </div>
    <div className="product__price">
      <h4 className="product__title">Preciso de:</h4>
      <p className="product__response">R$2.000</p>
    </div>
    <div className="product__payment">
      <h4 className="product__title">Quero Pagar em</h4>
      <p className="product__response">12 vezes</p>
    </div>
    <div className="product__goal">
      <h4 className="product__title">Para:</h4>
      <p className="product__response">Comprar uma bike</p>
    </div>
   
  </div>
)

export default Product