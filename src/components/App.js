import React from 'react'
import Header from './Header.js'
import Table from './board/Table.js'
import clone from 'clone'
import { convertKeyCode } from '../utils/input-tools.js'
import { returnRandomState, scrollState, fillShortRows } from '../utils/state-tools'
import { spawnPlayer, applyPhysics } from '../utils/player-tools'
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
  },

  handleKeyDown: function (event) {
    Ω(convertKeyCode(event.keyCode))
  },

  scrollState: function () {
    const scrollSpeed = 400
    const scrollInterval = window.setInterval(() => {

      let state = clone(scrollState(this.props.gameState))
      let floor = Math.random() > 0.5 ? this.state.floor + 1 : this.state.floor
      state = floorPattern(state, floor)

      if (!this.state.playerSpawned) {
        Ω('player should spawn')
        state = spawnPlayer(state, 1, 39)
        this.setState({playerSpawned: true})
      }

      state = applyPhysics(state)
      state = fillShortRows(state)
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
