export default () => {
  const state = []
    for (let i = 0; i < 20; i++) {
      const cells = new Array(40).fill('empty')
      state.push(cells)
    }
    
  return state
}
