import { expect } from 'chai'
import emptyTemplate from '../../src/patterns/empty-template'
import { scrollState } from '../../src/utils/state-tools'

describe('Scroll State', () => {
  it('should remove all the first cells from state rows', () => {
    const state = emptyTemplate()
    expect(state).to.have.length(20)
    expect(state[0]).to.have.length(40)
    expect(state[19]).to.have.length(40)

    const newState = scrollState(state)
    expect(newState).to.have.length(20)
    expect(newState[0]).to.have.length(39)
    expect(newState[19]).to.have.length(39)
  })
})
