import clone from 'clone'

export const generateStateArray = () => {
  const rawArray = []
  const stateArray = []
  Array.from(document.getElementsByTagName('td')).forEach(
    (tag) => { rawArray.push(tag.className) })
  while (rawArray.length) { stateArray.push(rawArray.splice(0, 40)) }

  return stateArray
}

export const scrollState = (state) => {
  return state.map((row) => { row.shift(); return row })
}

export const fillShortRows = (state, type = 'empty') => {
  return state.map((row) => {
    row.length < 40 ? row.push(type) : null
    return row
  })
}

export const returnRandomState = () => {
  return Math.random() > 0.5 ? 'full' : 'empty'
}
