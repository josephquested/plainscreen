import clone from 'clone'

export default (oldState, height = 3) => {
  const state = clone(oldState)
  const startingRow = 20 - height
  for (let i = startingRow; i < 20; i++) {
    state[i].push('full')
  }

  return state
}
