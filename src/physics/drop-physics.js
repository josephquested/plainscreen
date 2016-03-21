import clone from 'clone'
import dropPhysics from './drop-physics'
import { findPlayer } from '../utils/player-tools'

export default (oldState) => {
  let state = clone(oldState)
  const playerCells = findPlayer(state)
  if (!playerCells) return oldState

  // assigns the starting row and cell values for the player location
  let playerRow = playerCells[1][0]
  let playerColumn = playerCells[1][1]

  // if the player is standing on the ground, don't apply physics
  if (state[playerRow + 1][playerColumn] === 'full') return state

  // apply drop physics
  state[playerRow + 1][playerColumn] = 'player'

  // handles a crouching player event
  if (!playerCells[0]) {
    state[playerRow][playerColumn] = 'empty'

  // handles a standing player event
  } else {
    state[playerRow - 1][playerColumn] = 'empty'
    state[playerRow + 1][playerColumn] = 'player'
  }

  return state
}
