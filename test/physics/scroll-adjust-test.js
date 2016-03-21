import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'
import { spawnPlayer } from '../../src/utils/player-tools'
import scrollAdjust from '../../src/physics/scroll-adjust'
import { scrollState, fillShortRows } from '../../src/utils/state-tools'

// should NOT scroll conditions

describe('Scroll Adjust', () => {
  it('should not scroll the player', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')

    state = scrollState(state)
    state = fillShortRows(state)
    state = scrollAdjust(state)

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')
  })
})

describe('Crouching Scroll Adjust', () => {
  it('should not scroll the player if they are crouching', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][1] = 'empty'

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')

    state = scrollState(state)
    state = fillShortRows(state)
    state = scrollAdjust(state)

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')
  })
})

describe('Crouching Scroll Adjust HIGH BLOCKED', () => {
  it('should not scroll the player if they are crouching and HIGH BLOCKED', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][1] = 'empty'
    state[15][2] = 'full'

    expect(state[15][0]).to.have.string('empty')
    expect(state[15][1]).to.have.string('empty')
    expect(state[15][2]).to.have.string('full')
    expect(state[16][0]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[16][2]).to.have.string('empty')

    state = scrollState(state)
    state = fillShortRows(state)
    state = scrollAdjust(state)

    expect(state[15][0]).to.have.string('empty')
    expect(state[15][1]).to.have.string('full')
    expect(state[15][2]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[16][2]).to.have.string('empty')
  })
})

// SHOULD scroll conditions

describe('Scroll Adjust BLOCKED', () => {
  it('should scroll the player if they are resting and LOW BLOCKED', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[16][2] = 'full'

    expect(state[15][0]).to.have.string('empty')
    expect(state[15][1]).to.have.string('player')
    expect(state[15][2]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[16][2]).to.have.string('full')

    state = scrollState(state)
    state = fillShortRows(state)
    state = scrollAdjust(state)

    expect(state[15][0]).to.have.string('player')
    expect(state[15][1]).to.have.string('empty')
    expect(state[15][2]).to.have.string('empty')
    expect(state[16][0]).to.have.string('player')
    expect(state[16][1]).to.have.string('full')
    expect(state[16][2]).to.have.string('empty')
  })
})

describe('Scroll Adjust BLOCKED', () => {
  it('should scroll the player if they are resting and HIGH BLOCKED', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][2] = 'full'

    expect(state[15][0]).to.have.string('empty')
    expect(state[15][1]).to.have.string('player')
    expect(state[15][2]).to.have.string('full')
    expect(state[16][0]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[16][2]).to.have.string('empty')

    state = scrollState(state)
    state = fillShortRows(state)
    state = scrollAdjust(state)

    expect(state[15][0]).to.have.string('player')
    expect(state[15][1]).to.have.string('full')
    expect(state[15][2]).to.have.string('empty')
    expect(state[16][0]).to.have.string('player')
    expect(state[16][1]).to.have.string('empty')
    expect(state[16][2]).to.have.string('empty')
  })
})

describe('Scroll Adjust crouching LOW BLOCKED', () => {
  it('should scroll the player if they are crouching and LOW BLOCKED', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][1] = 'empty'
    state[16][2] = 'full'

    expect(state[15][0]).to.have.string('empty')
    expect(state[15][1]).to.have.string('empty')
    expect(state[15][2]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[16][2]).to.have.string('full')

    state = scrollState(state)
    state = fillShortRows(state)
    state = scrollAdjust(state)

    expect(state[15][0]).to.have.string('empty')
    expect(state[15][1]).to.have.string('empty')
    expect(state[15][2]).to.have.string('empty')
    expect(state[16][0]).to.have.string('player')
    expect(state[16][1]).to.have.string('full')
    expect(state[16][2]).to.have.string('empty')
  })
})
