import { generateInitState } from './utils'

export default (state = generateInitState(), action) => {
  switch (action.type) {
    case 'SCROLL':
      return action.state
    default:
      return state
  }
}
