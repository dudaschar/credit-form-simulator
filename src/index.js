import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Signup from './pages/signup/Signup'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Signup />, document.getElementById('root'))
registerServiceWorker()
