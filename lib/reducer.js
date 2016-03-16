import { returnEmptyPattern, returnFloorPattern } from './utils'

export default (state = returnEmptyPattern(), action) => {
  switch (action.type) {
    case 'SCROLL':
      return action.state
    default:
      return state
  }
}
