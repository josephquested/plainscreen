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

export const convertKeyCode = keyCode => { return keys.get(keyCode) }

export const generateStateArray = () => {
  const rawArray = []
  const stateArray = []

  Array.from(document.getElementsByTagName('td')).forEach(
    (tag) => { rawArray.push(tag.className)})

  while(rawArray.length) { stateArray.push(rawArray.splice(0, 40)) }
  return stateArray
}
