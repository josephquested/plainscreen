const keys = new Map([
 [38, 'up'],
 [87, 'up'],
 [40, 'down'],
 [83, 'down'],
 [37, 'left'],
 [65, 'left'],
 [39, 'right'],
 [68, 'right'],
])

// pattern generators //

export const returnEmptyPattern = () => {
  const state = []
    for (let i = 0; i < 20; i++) {
      const cells = new Array(40).fill('empty')
      state.push(cells)
    }
  return state
}

export const returnFloorPattern = (state) => {
  let rows = [state[17], state[18], state[19]]
  rows.forEach((row) => {
    row.fill('full')
    })
  // console.log(state)
  return state
}

export const returnRandomPattern = () => {
  return Math.random() > 0.5 ? 'full' : 'empty'
}

//    ***    //

export const convertKeyCode = keyCode => { return keys.get(keyCode) }

export const generateStateArray = () => {
  const rawArray = []
  const stateArray = []

  Array.from(document.getElementsByTagName('td')).forEach(
    (tag) => { rawArray.push(tag.className)})

  while(rawArray.length) { stateArray.push(rawArray.splice(0, 40)) }
  return stateArray
}
