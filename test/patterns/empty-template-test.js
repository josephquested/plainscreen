import { expect } from 'chai'
import emptyTemplate from '../../src/patterns/empty-template'

describe('Empty Template', () => {
  it('should generate an empty state template', () => {
    const state = emptyTemplate()
    expect(state).to.have.length(20)
    expect(state[0]).to.have.length(40)
  })
})
