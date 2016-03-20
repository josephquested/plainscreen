import clone from 'clone'

export const spawnPlayer = (oldState, row, cell) => {
  const state = clone(oldState)
  state[row][cell] = 'player'
  state[row - 1][cell] = 'player'
  return state
}

export const applyPhysics = (oldState) => {
  const state = clone(oldState)
  const playerCells = findPlayer(state)
  let playerRow = playerCells[1][0]
  let playerColumn = playerCells[1][1]

  if (state[playerRow + 1][playerColumn] === 'full') { return state }
  if (!playerCells[0]) {
    state[playerRow][playerColumn] = 'empty'
  } else {
    state[playerRow - 1][playerColumn] = 'empty'
    state[playerRow + 1][playerColumn] = 'player'
  }

  state[playerRow + 1][playerColumn] = 'player'
  return state
}

export const findPlayer = (state) => {
  const cells = []
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      if (state[i][j] === 'player') {
        cells.push([i, j])
        if (state[i + 1][j] === 'player') {
          cells.push([i + 1, j])
        }
      cells.length === 1 ? cells.unshift(null) : null
      return cells
      }
    }
  }
  return null
}
