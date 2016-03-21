import clone from 'clone'
import floorPattern from '../patterns/floor-pattern'
import { scrollState, fillShortRows } from '../utils/state-tools'
import airborneScrollAdjust from '../physics/airborne-scroll-adjust'

export default (action) => {
  let state = clone(scrollState(action.state))
  let floor = Math.random() > 0.5 ? action.floor + 1 : action.floor
  state = floorPattern(state, floor)
  state = fillShortRows(state)
  state = airborneScrollAdjust(state)
  return state
}
