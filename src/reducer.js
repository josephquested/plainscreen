import emptyTemplate from './patterns/empty-template'
import floorTemplate from './patterns/floor-template'

export default (state = floorTemplate(), action) => {
  switch (action.type) {
    case 'SCROLL':
      return action.state
    default:
      return state
  }
}
