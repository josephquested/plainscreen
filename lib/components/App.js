import React from 'react'
import Header from './Header.js'
import Table from './board/Table.js'
import { convertKeyCode, generateStateArray } from '../utils'
import clone from 'clone'

export default React.createClass({

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown)
  },

  handleKeyDown: function (event) {
    console.log(convertKeyCode(event.keyCode))
    if (convertKeyCode(event.keyCode) === 'up') this.scrollState()
  },

  scrollState: function () {
    const state = clone(generateStateArray())
    state.forEach((row) => {
      row.shift()
      row.push('full')
    })
    this.props.store.dispatch({type: 'SCROLL', state: state})
  },

  render () {
    return (
      <div className='app'>
        <Header header='plainscreen'/>
        <Table id='table' gameState={this.props.gameState} height='20' width='40'/>
      </div>
    )
  }
})
