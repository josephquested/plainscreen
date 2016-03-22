import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'
import { spawnPlayer, findPlayer } from '../../src/utils/player-tools'
import jumpPhysics from '../../src/physics/jump-physics'

describe('Jump Physics', () => {
  it('should apply jump physics to the player', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 0)

    for (let i = 16; i > 12; i--) {
      expect(state[i][0]).to.have.string('player')
      expect(state[i - 1][0]).to.have.string('player')
      expect(state[i - 2][0]).to.have.string('empty')

      state = jumpPhysics(state)

      Ω('starting cell', state[i][0], '')
      expect(state[i][0]).to.have.string('empty')
      expect(state[i - 1][0]).to.have.string('player')
      expect(state[i - 2][0]).to.have.string('player')
    }
  })
})

describe('Jump/Crouching Physics', () => {
  it('should apply jump physics to a crouching player', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 0)
    state[15][0] = 'empty'

    for (let i = 16; i > 12; i--) {
      expect(state[i][0]).to.have.string('player')
      expect(state[i - 1][0]).to.have.string('empty')
      expect(state[i - 2][0]).to.have.string('empty')

      state = jumpPhysics(state)

      Ω('starting cell', state[i][0], '')
      expect(state[i][0]).to.have.string('empty')
      expect(state[i - 1][0]).to.have.string('player')
      expect(state[i - 2][0]).to.have.string('empty')
    }
  })
})
