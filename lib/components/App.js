import React from 'react'
import Header from './ui/Header.js'
import Table from './board/Table.js'
import { convertKeyCode } from '../utils'

export default React.createClass({

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown)
  },

  handleKeyDown: function (event) {
    console.log(convertKeyCode(event.keyCode))
  },

  log: function (text) {
    console.log(`gamelog: ${text}`)
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
