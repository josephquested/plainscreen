import clone from 'clone'

export const generateStateArray = () => {
  const rawArray = []
  const stateArray = []
  Array.from(document.getElementsByTagName('td')).forEach(
    (tag) => { rawArray.push(tag.className) })
  while (rawArray.length) { stateArray.push(rawArray.splice(0, 40)) }

  return stateArray
}

export const scrollState = (oldState) => {
  const state = clone(oldState)
  return state.map((row) => { row.shift(); return row })
}

export const returnRandomState = () => {
  return Math.random() > 0.5 ? 'full' : 'empty'
}
