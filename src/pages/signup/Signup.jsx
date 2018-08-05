import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Product from '../../components/product/Product'
import OrderSteps from '../../components/orderSteps/OrderSteps'

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
  </div>
)

export default Signup