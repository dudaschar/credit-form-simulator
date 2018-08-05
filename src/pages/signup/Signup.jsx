import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Product from '../../components/product/Product'
import OrderSteps from '../../components/orderSteps/OrderSteps'
import Form from '../../components/form/Form'

import './signup.css'

const Signup = () => (
  <div className="signup">
    <Navbar />
    <Product
      name="Paul Irish"
      cpf="762.888.176-92"
      value="2.000"
      deadline="12"
      goal="Comprar uma bike"
    />
    <OrderSteps />
    <div className="submit-form">
      <h2>Dados Pessoais</h2>
      <Form />
    </div>
  </div>
)

export default Signup