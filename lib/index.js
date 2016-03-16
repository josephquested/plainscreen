import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App.js'
import reducer from './reducer'

const store = createStore(reducer)
const app = document.createElement('div')
document.body.appendChild(app)

const render = () => {
  ReactDOM.render(<App gameState={store.getState()} store={store}/>, app)
}

store.subscribe(render)
render()
