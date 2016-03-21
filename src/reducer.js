import clone from 'clone'
import emptyTemplate from './patterns/empty-template'
import floorTemplate from './patterns/floor-template'
import floorPattern from './patterns/floor-pattern'

const playerSpawned = false

export default (state = floorTemplate(), action) => {
  switch (action.type) {
    case 'SCROLL':
      let state = clone(action.state)
      let floor = Math.random() > 0.5 ? action.floor + 1 : action.floor
      state = floorPattern(state, floor)
      if (!playerSpawned) {
        Ω('player should spawn')
        state = spawnPlayer(state, 1, 38)
        playerSpawned = true
      }

      return state
    default:
      return state
  }
}



state = fillShortRows(state)
this.props.store.dispatch({type: 'SCROLL', state: state})
}, scrollSpeed)
},
