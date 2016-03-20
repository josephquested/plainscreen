import clone from 'clone'
import dropPhysics from './drop-physics'

export default (oldState, playerCells) => {
  if (!playerCells) return oldState

  const state = clone(oldState)
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
