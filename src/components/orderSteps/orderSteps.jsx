import React from 'react'
import './orderSteps.css'

const OrderSteps = () => (
  <div className="order-steps">
    <div className="order-steps__box">
      <p className="order-steps__number order-steps__number--done">1</p>
      <p className="order-steps__name">Simule</p>
    </div>
    <div className="order-steps__box">
      <p className="order-steps__number order-steps__number--active">2</p>
      <p className="order-steps__name order-steps__name--active">Preencha o cadastro</p>
    </div>
    <div className="order-steps__box">
      <p className="order-steps__number">3</p>
      <p className="order-steps__name">Revise seu pedido</p>
    </div>
    <div className="order-steps__box">
      <p className="order-steps__number">4</p>
      <p className="order-steps__name">Finalize o pedido</p>
    </div>
  </div>
)

export default OrderSteps