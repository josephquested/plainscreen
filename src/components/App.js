import React from 'react'
import Header from './Header.js'
import Table from './board/Table.js'
import clone from 'clone'
import { convertKeyCode } from '../utils/input-tools.js'

export default React.createClass({

  getInitialState: function () {
    return {
      floor: 3,
      patternPackage: [],
      jumping: false,
      keys: []
    }
  },

  componentDidMount: function () {
    window.addEventListener('keydown', (event) => {
      this.SetState({keys: keys[event.keyCode] = true})
    })
    window.addEventListener('keydown', this.controlJump)
    this.controlScroll()
    this.controlPhysics()
  },


  controlJump: function (event) {
    const inputKey = convertKeyCode(event.keyCode)
    Ω(event)
    // if (inputKey === 'jump') {
      // this.props.store.dispatch({type: 'MOVE', state: this.props.gameState, direction: inputKey})
    // }
    if (inputKey === 'jump') {
      this.setState({jumping: true})
    } else {
      this.setState({jumping: false})
    }
  },

  controlMovement: function (event) {
    const inputKey = convertKeyCode(event.keyCode)
    if (inputKey === 'left' || inputKey === 'right') {
      this.props.store.dispatch({type: 'MOVE', state: this.props.gameState, direction: inputKey})
    }
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
