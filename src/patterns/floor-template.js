import clone from 'clone'
import emptyTemplate from '../../src/patterns/empty-template'

export default () => {
  const state = (emptyTemplate())
  let rows = [state[17], state[18], state[19]]
  rows.forEach((row) => {
    row.fill('full')
    })

  return state
}
