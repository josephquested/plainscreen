import clone from 'clone'

export default (oldState) => {
  const state = clone(oldState)
  return state
}
