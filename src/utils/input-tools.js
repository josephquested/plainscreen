export const convertKeyCode = (keyCode) => {
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

  return keys.get(keyCode)
}

export const determine = (a, b, direction) => {
  if (direction === 'right') return a + b
  if (direction === 'left') return a - b
  return null
}
