import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Signup from './pages/signup/Signup'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Signup />
  </BrowserRouter>, document.getElementById('root'))
registerServiceWorker()
