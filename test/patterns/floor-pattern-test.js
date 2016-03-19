import { expect } from 'chai'
import emptyTemplate from '../../src/patterns/empty-template'
import floorPattern from '../../src/patterns/floor-pattern'
import { scrollState } from '../../src/utils/state-tools'

describe('Floor Pattern', () => {
  it('should generate an active floor state', () => {
    const state = floorPattern(scrollState(emptyTemplate()))
    expect(state[0]).to.have.length(39)
    expect(state[19]).to.have.length(40)
    expect(state[0][38]).to.have.string('empty')
    expect(state[17][37]).to.have.string('empty')
    expect(state[17][39]).to.have.string('full')
    expect(state[18][39]).to.have.string('full')
    expect(state[19][39]).to.have.string('full')
  })
})
