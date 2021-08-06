/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-undef */
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

import './services/firebase'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
