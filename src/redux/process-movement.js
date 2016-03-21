import clone from 'clone'
import horizontalMovement from '../physics/horizontal-movement'

export default (action) => {
    let state = clone(action.state)
    state = horizontalMovement(state, action.direction)
  return state
}
