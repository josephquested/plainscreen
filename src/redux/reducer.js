import clone from 'clone'
import processScroll from './process-scroll'
import processPhysics from './process-physics'
import processMovement from './process-movement'
import { spawnPlayer } from '../utils/player-tools'
import floorTemplate from '../patterns/floor-template'

export default (state = floorTemplate(), action) => {
  switch (action.type) {

    case 'SCROLL':
      return processScroll(action)

    case 'PHYSICS':
      return processPhysics(action)

    case 'MOVE':
      return processMovement(action)

    default:
      state = spawnPlayer(state, 1, 19)
      return state
  }
}
