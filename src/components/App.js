import React from 'react'
import Header from './Header.js'
import Table from './board/Table.js'
import clone from 'clone'
import { convertKeyCode } from '../utils/input-tools.js'
import { generateStateArray } from '../utils/state-tools'
import floorTemplate from '../patterns/floor-template'
import Ω from 'lomega'

export default React.createClass({

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown)
    this.scrollState()
  },

  handleKeyDown: function (event) {
    Ω(convertKeyCode(event.keyCode))
  },

  scrollState: function () {
    const scrollSpeed = 500
    const scrollInterval = window.setInterval(() => {
      let state = clone(generateStateArray())
      state = floorTemplate(state)
      this.props.store.dispatch({type: 'SCROLL', state: state})
    }, scrollSpeed)
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
