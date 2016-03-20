import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'

describe('Floor Template', () => {
  it('should generate an floor state template', () => {
    const state = floorTemplate()
    expect(state).to.have.length(20)
    expect(state[0]).to.have.length(40)

    state.forEach((row, index) => {
      if (index === 17 || index === 18 || index === 19) {
        expect(state[index][index]).to.have.string('full')
      } else {
        expect(state[index][index]).to.have.string('empty')
      }
    })
  })
})
