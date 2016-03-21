import React from 'react'
import Header from './Header.js'
import Table from './board/Table.js'
import clone from 'clone'
import { convertKeyCode } from '../utils/input-tools.js'

export default React.createClass({

  getInitialState: function () {
    return {
      floor: 3,
      patternPackage: []
    }
  },

  componentDidMount: function () {
    window.addEventListener('keydown', this.controlInputs)
    this.controlScroll()
    this.controlPhysics()
  },

  controlInputs: function (event) {
    console.log(convertKeyCode(event.keyCode))
  },

  controlScroll: function () {
    const scrollSpeed = 400
    const scrollInterval = window.setInterval(() => {
      this.props.store.dispatch({type: 'SCROLL', state: this.props.gameState, floor: this.state.floor})
    }, scrollSpeed)
  },

  controlPhysics: function () {
    const physicsSpeed = 100
    const physicsInterval = window.setInterval(() => {
      this.props.store.dispatch({type: 'PHYSICS', state: this.props.gameState})
    }, physicsSpeed)
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
