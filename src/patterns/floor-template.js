export default (state) => {
  let rows = [state[17], state[18], state[19]]
  rows.forEach((row) => {
    row.fill('full')
    })

  return state
}
