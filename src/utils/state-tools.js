export const generateStateArray = () => {
  const rawArray = []
  const stateArray = []
  Array.from(document.getElementsByTagName('td')).forEach(
    (tag) => { rawArray.push(tag.className) })
  while (rawArray.length) { stateArray.push(rawArray.splice(0, 40)) }

  return stateArray
}

export const returnRandomState = () => {
  return Math.random() > 0.5 ? 'full' : 'empty'
}
