import { expect } from 'chai'
import emptyTemplate from '../../src/patterns/empty-template'
import floorPattern from '../../src/patterns/floor-pattern'
import { fillShortRows, scrollState } from '../../src/utils/state-tools'

describe('Fill Short Rows', () => {
  it('should fill all the short rows with a string argument', () => {
    let state = floorPattern(scrollState(emptyTemplate()))
    expect(state[0]).to.have.length(39)
    expect(state[18]).to.have.length(40)
    state = fillShortRows(state)
    expect(state[0]).to.have.length(40)
    expect(state[18]).to.have.length(40)
  })
})
