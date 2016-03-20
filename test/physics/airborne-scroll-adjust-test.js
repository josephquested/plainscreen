import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'
import { spawnPlayer } from '../../src/utils/player-tools'
import airborneScrollAdjust from '../../src/physics/airborne-scroll-adjust'
import { scrollState, fillShortRows } from '../../src/utils/state-tools'

describe('Airborne Scroll Adjust', () => {
  it('should not scroll the player if they are airborne', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 1, 1)

    expect(state[0][0]).to.have.string('empty')
    expect(state[0][1]).to.have.string('player')
    expect(state[1][0]).to.have.string('empty')
    expect(state[1][1]).to.have.string('player')

    state = scrollState(state)
    state = fillShortRows(state)
    state = airborneScrollAdjust(state)

    expect(state[0][0]).to.have.string('empty')
    expect(state[0][1]).to.have.string('player')
    expect(state[1][0]).to.have.string('empty')
    expect(state[1][1]).to.have.string('player')
  })
})

describe('Airborne/Crouch Scroll Adjust', () => {
  it('should not scroll the player if they are airborne/crouching', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 1, 1)
    state[0][1] = 'empty'

    expect(state[0][0]).to.have.string('empty')
    expect(state[0][1]).to.have.string('empty')
    expect(state[1][0]).to.have.string('empty')
    expect(state[1][1]).to.have.string('player')

    state = scrollState(state)
    state = fillShortRows(state)
    state = airborneScrollAdjust(state)

    expect(state[0][0]).to.have.string('empty')
    expect(state[0][1]).to.have.string('empty')
    expect(state[1][0]).to.have.string('empty')
    expect(state[1][1]).to.have.string('player')
  })
})

describe('Airborne/Resting Scroll Adjust', () => {
  it('should scroll the player if they are not airborne', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')
    expect(state[17][0]).to.have.string('full')

    state = scrollState(state)
    state = fillShortRows(state)
    state = airborneScrollAdjust(state)

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('empty')
    expect(state[15][0]).to.have.string('player')
    expect(state[16][0]).to.have.string('player')
    expect(state[17][0]).to.have.string('full')
  })
})

describe('Airborne/Crouching/Resting Scroll Adjust', () => {
  it('should scroll the player if they are not airborne/crouching', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][1] = 'empty'

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')
    expect(state[17][0]).to.have.string('full')

    state = scrollState(state)
    state = fillShortRows(state)
    state = airborneScrollAdjust(state)

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('empty')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('player')
    expect(state[17][0]).to.have.string('full')
  })
})
