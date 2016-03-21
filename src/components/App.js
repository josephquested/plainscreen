import React from 'react'
import Header from './Header.js'
import Table from './board/Table.js'
import clone from 'clone'
import { convertKeyCode } from '../utils/input-tools.js'
import { returnRandomState, scrollState, fillShortRows } from '../utils/state-tools'
import { spawnPlayer } from '../utils/player-tools'
import airborneScrollAdjust from '../physics/airborne-scroll-adjust'
import applyPhysics from '../physics/apply-physics'
import floorPattern from '../patterns/floor-pattern'

export default React.createClass({

  getInitialState: function () {
    return {
      floor: 3,
      patternPackage: [],
      playerSpawned: false
    }
  },

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown)
    this.scrollState()
    this.applyPhysics()
  },

  handleKeyDown: function (event) {
    console.log(convertKeyCode(event.keyCode))
  },

  scrollState: function () {
    const scrollSpeed = 400
    const scrollInterval = window.setInterval(() => {

      let state = clone(scrollState(this.props.gameState))
      let floor = Math.random() > 0.5 ? this.state.floor + 1 : this.state.floor
      state = floorPattern(state, floor)

      if (!this.state.playerSpawned) {
        Ω('player should spawn')
        state = spawnPlayer(state, 1, 18)
        this.setState({playerSpawned: true})
      }

      state = fillShortRows(state)
      state = airborneScrollAdjust(state)
      this.props.store.dispatch({type: 'SCROLL', state: state})
    }, scrollSpeed)
  },

  applyPhysics: function () {
    const physicsSpeed = 250
    const physicsInterval = window.setInterval(() => {
      let state = clone(this.props.gameState)

      state = applyPhysics(state)
      this.props.store.dispatch({type: 'SCROLL', state: state})
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
