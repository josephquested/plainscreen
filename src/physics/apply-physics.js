import clone from 'clone'
import { findPlayer } from '../utils/player-tools'
import dropPhysics from './drop-physics'

export default (oldState) => {
  let state = clone(oldState)
  let playerCells = findPlayer(state)
  if (!playerCells) return state
  state = dropPhysics(state)
  return state
}
