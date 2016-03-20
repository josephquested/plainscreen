import { expect } from 'chai'
import emptyTemplate from '../../src/patterns/empty-template'
import floorPattern from '../../src/patterns/floor-pattern'
import { scrollState } from '../../src/utils/state-tools'

describe('Floor Pattern', () => {
  it('should generate an active floor state', () => {
    const state = floorPattern(scrollState(emptyTemplate()))
    expect(state[16][39]).to.be.undefined
    expect(state[16]).to.have.length(39)
    expect(state[17]).to.have.length(40)
    expect(state[17][39]).to.have.string('full')
    expect(state[18][39]).to.have.string('full')
    expect(state[19][39]).to.have.string('full')

    const newState = floorPattern(scrollState(emptyTemplate()), 5)
    expect(newState[14][39]).to.be.undefined
    expect(newState[14]).to.have.length(39)
    expect(newState[15]).to.have.length(40)
    expect(newState[15][39]).to.have.string('full')
    expect(newState[16][39]).to.have.string('full')
    expect(newState[17][39]).to.have.string('full')
    expect(newState[18][39]).to.have.string('full')
    expect(newState[19][39]).to.have.string('full')
  })
})
