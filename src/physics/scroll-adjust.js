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
  let crouching = !playerCells[0] ? true : false

  // if the player is blocked, scroll
  if (state[playerRow][playerColumn + 1] === 'full') return oldState
  if (!crouching && state[playerRow - 1][playerColumn + 1] === 'full') return oldState

  // handles a crouching player event
  if (crouching) {
    state[playerRow][playerColumn + 1] = 'player'
    state[playerRow][playerColumn] = 'empty'

  // handles a standing player event
  } else {
    state[playerRow - 1][playerColumn + 1] = 'player'
    state[playerRow - 1][playerColumn] = 'empty'
    state[playerRow][playerColumn + 1] = 'player'
    state[playerRow][playerColumn] = 'empty'
  }

  return state
}
