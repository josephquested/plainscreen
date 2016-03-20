import clone from 'clone'
import dropPhysics from './drop-physics'
import { findPlayer } from '../utils/player-tools'

export default (oldState) => {
  let state = clone(oldState)
  const playerCells = findPlayer(state)
  if (!playerCells) return oldState
  let playerRow = playerCells[1][0]
  let playerColumn = playerCells[1][1]

  // if the player is isn't airborne, don't adjust scroll
  if (state[playerRow + 1][playerColumn] === 'full') return oldState

  // handles a crouching player event
  if (!playerCells[0]) {
    state[playerRow][playerColumn + 1] = 'player'
    state[playerRow][playerColumn] = 'empty'

  // handles a standing player event
  } else {
    state[playerRow - 1][playerColumn + 1] = 'player'
    state[playerRow - 1][playerColumn] = 'empty'
    state[playerRow][playerColumn + 1] = 'player'
    state[playerRow][playerColumn] = 'empty'
  }

  // if the player
  state[playerRow][playerColumn]
  return state
}
