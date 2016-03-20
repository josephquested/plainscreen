global.Ω = require('lomega')

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App.js'
import reducer from './reducer'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(<App gameState={store.getState()} store={store}/>,
  document.getElementById('app'))
}

store.subscribe(render)
render()
