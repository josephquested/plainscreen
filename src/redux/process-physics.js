import clone from 'clone'
import applyPhysics from '../physics/apply-physics'

export default (action) => {
    let state = clone(action.state)
    state = applyPhysics(state)
  return state
}
