import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'
import { spawnPlayer, applyPhysics } from '../../src/utils/player-tools'

describe('Player Physics', () => {
  it('should apply drop physics to the player', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 1, 0)

    for (let i = 0; i < 20; i++) {
      expect(state[i][0]).to.have.string('player')
      expect(state[i + 1][0]).to.have.string('player')
      expect(state[i + 2][0]).to.have.string('empty')

      state = applyPhysics(state)
      expect(state[i][0]).to.have.string('empty')
      expect(state[i + 1][0]).to.have.string('player')
      expect(state[i + 2][0]).to.have.string('player')
      expect(state[i + 3][0]).to.have.string('empty')

      if (i >= 17) {
        expect(state[15][0]).to.have.string('player')
        expect(state[16][0]).to.have.string('player')
        expect(state[17][0]).to.have.string('full')
        state = applyPhysics(state)
        expect(state[15][0]).to.have.string('player')
        expect(state[16][0]).to.have.string('player')
        expect(state[17][0]).to.have.string('full')
      }
    }
  })
})
