import clone from 'clone'
import { findPlayer } from '../utils/player-tools'
import { determine } from '../utils/input-tools'

export default (oldState, direction) => {
  let state = clone(oldState)
  const playerCells = findPlayer(state)
  if (!playerCells) return oldState

  let playerRow = playerCells[1][0]
  let playerColumn = playerCells[1][1]
  let crouching = !playerCells[0] ? true : false
  let destinationCells = []

  destinationCells.push(crouching ? null : [playerCells[0][0],
    determine(playerColumn, 1, direction)])
  destinationCells.push([playerRow,
    determine(playerColumn, 1, direction)])

  if (state[destinationCells[1][0]][destinationCells[1][1]] === 'full') {
    return oldState
  }

  if (!crouching && state[destinationCells[0][0]][destinationCells[0][1]] === 'full') {
    return oldState
  }

  state[destinationCells[1][0]][destinationCells[1][1]] = 'player'
  state[playerRow][playerColumn] = 'empty'

  if (!crouching) {
    state[destinationCells[0][0]][destinationCells[0][1]] = 'player'
    state[playerRow - 1][playerColumn] = 'empty'
  }

  return state
}
