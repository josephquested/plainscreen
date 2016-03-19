export const spawnPlayer = (state) => {
  const states = [
    state[16][30],
    state[15][30],
    state[16][31],
    state[15][31],
  ]

  states.forEach((state) => {
    state = 'player'
  })

  return state
}
