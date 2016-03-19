import clone from 'clone'

export default (oldState) => {
  const state = clone(oldState)
  let rows = [state[17], state[18], state[19]]
  rows.forEach((row) => {
    row.fill('full')
    })

  return state
}
