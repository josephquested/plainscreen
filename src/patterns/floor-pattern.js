import clone from 'clone'

export default (oldState) => {
  const state = clone(oldState)
  state[17].push('full')
  state[18].push('full')
  state[19].push('full')
  return state
}
