import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'

const app = document.createElement('div')
document.body.appendChild(app)
const game = ReactDOM.render(<App/>, app)
