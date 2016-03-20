import clone from 'clone'

export const spawnPlayer = (oldState, row, cell) => {
  const state = clone(oldState)
  state[row][cell] = 'player'
  state[row - 1][cell] = 'player'
  return state
}

export const applyPhysics = (oldState) => {
  const state = clone(oldState)

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
      return cells
      }
    }
  }
  return null
}
