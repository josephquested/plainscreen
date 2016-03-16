import React from 'react'
import Header from './Header.js'
import Table from './board/Table.js'
import { convertKeyCode, generateStateArray } from '../utils'

export default React.createClass({

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown)
  },

  handleKeyDown: function (event) {
    console.log(convertKeyCode(event.keyCode))
    if (convertKeyCode(event.keyCode) === 'up') this.getStateArray()
  },

  getStateArray: function () {
    const stateArray = generateStateArray()
    console.log(stateArray)
  },

  render () {
    return (
      <div className='app'>
        <Header header='plainscreen'/>
        <Table id='table' height='20' width='40'/>
      </div>
    )
  }
})
