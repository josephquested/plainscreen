import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'
import { spawnPlayer, findPlayer } from '../../src/utils/player-tools'
import dropPhysics from '../../src/physics/drop-physics'

describe('Player Drop Physics', () => {
  it('should apply drop physics to the player', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 1, 0)

    for (let i = 0; i < 5; i++) {
      expect(state[i][0]).to.have.string('player')
      expect(state[i + 1][0]).to.have.string('player')
      expect(state[i + 2][0]).to.have.string('empty')

      let playerCells = findPlayer(state)
      state = dropPhysics(state, playerCells)

      expect(state[i][0]).to.have.string('empty')
      expect(state[i + 1][0]).to.have.string('player')
      expect(state[i + 2][0]).to.have.string('player')
      expect(state[i + 3][0]).to.have.string('empty')
    }
  })
})

describe('Player Couching/Drop Physics', () => {
  it('should apply drop physics to a crouching player', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 1, 0)
    state[0][0] = 'empty'

    for (let i = 0; i < 5; i++) {
      expect(state[i][0]).to.have.string('empty')
      expect(state[i + 1][0]).to.have.string('player')
      expect(state[i + 2][0]).to.have.string('empty')

      let playerCells = findPlayer(state)
      state = dropPhysics(state, playerCells)
      state = dropPhysics(state)

      expect(state[i][0]).to.have.string('empty')
      expect(state[i + 1][0]).to.have.string('empty')
      expect(state[i + 2][0]).to.have.string('player')
      expect(state[i + 3][0]).to.have.string('empty')
    }
  })
})

describe ('Player Resting Physics', () => {
  it('should have the player stand on the ground', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 0)
    expect(state[15][0]).to.have.string('player')
    expect(state[16][0]).to.have.string('player')
    expect(state[17][0]).to.have.string('full')

    let playerCells = findPlayer(state)
    state = dropPhysics(state, playerCells)
    state = dropPhysics(state)

    expect(state[15][0]).to.have.string('player')
    expect(state[16][0]).to.have.string('player')
    expect(state[17][0]).to.have.string('full')
  })
})

describe ('Player Crouching/Resting Physics', () => {
  it('should have the player crouch on the ground', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 0)
    state[15][0] = 'empty'
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('player')
    expect(state[17][0]).to.have.string('full')

    let playerCells = findPlayer(state)
    state = dropPhysics(state, playerCells)
    state = dropPhysics(state)

    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('player')
    expect(state[17][0]).to.have.string('full')
  })
})
