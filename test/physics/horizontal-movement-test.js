import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'
import { spawnPlayer } from '../../src/utils/player-tools'
import airborneScrollAdjust from '../../src/physics/airborne-scroll-adjust'
import horizontalMovement from '../../src/physics/horizontal-movement'
import { scrollState, fillShortRows } from '../../src/utils/state-tools'

// normal movement //

describe('Horizontal Movement: left', () => {
  it('should move the player left one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')

    state = horizontalMovement(state, 'left')

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('empty')
    expect(state[15][0]).to.have.string('player')
    expect(state[16][0]).to.have.string('player')
  })
})

describe('Horizontal Movement: right', () => {
  it('should move the player right one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')

    state = horizontalMovement(state, 'right')

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('empty')
    expect(state[15][2]).to.have.string('player')
    expect(state[16][2]).to.have.string('player')
  })
})

// blocked movement

describe('Horizontal Movement LOW BLOCK: left', () => {
  it('shouldnt move the player left one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[16][0] = 'full'

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('full')

    state = horizontalMovement(state, 'left')

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('full')
  })
})

describe('Horizontal Movement LOW BLOCK: right', () => {
  it('shouldnt move the player right one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[16][2] = 'full'

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][2]).to.have.string('full')

    state = horizontalMovement(state, 'right')

    expect(state[15][1]).to.have.string('player')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][2]).to.have.string('full')
  })
})

// crouching movement

describe('Horizontal Movement/Crouching: left', () => {
  it('should move the crouching player left one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][1] = 'empty'

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')

    state = horizontalMovement(state, 'left')

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('empty')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('player')
  })
})

describe('Horizontal Movement/Crouching: right', () => {
  it('should move the crouching player right one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][1] = 'empty'

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('empty')

    state = horizontalMovement(state, 'right')

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('empty')
    expect(state[15][2]).to.have.string('empty')
    expect(state[16][2]).to.have.string('player')
  })
})

// blocked crouching movement

describe('Horizontal Movement/Crouching LOW BLOCK: left', () => {
  it('shouldnt move the crouching player left one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][1] = 'empty'
    state[16][0] = 'full'

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('full')

    state = horizontalMovement(state, 'left')

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][0]).to.have.string('full')
  })
})

describe('Horizontal Movement/Crouching LOW BLOCK: right', () => {
  it('shouldnt move the crouching player right one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][1] = 'empty'
    state[16][2] = 'full'

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][2]).to.have.string('full')

    state = horizontalMovement(state, 'right')

    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[15][0]).to.have.string('empty')
    expect(state[16][2]).to.have.string('full')
  })
})

// crouching under high block movement

describe('Horizontal Movement/Crouching HIGH BLOCK: left', () => {
  it('should move the crouching player left one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][0] = 'full'
    state[15][1] = 'empty'

    expect(state[15][0]).to.have.string('full')
    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[16][0]).to.have.string('empty')

    state = horizontalMovement(state, 'left')

    expect(state[15][0]).to.have.string('full')
    expect(state[15][1]).to.have.string('empty')
    expect(state[16][0]).to.have.string('player')
    expect(state[16][1]).to.have.string('empty')
  })
})

describe('Horizontal Movement/Crouching HIGH BLOCK: right', () => {
  it('should move the crouching player right one cell', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 1)
    state[15][2] = 'full'
    state[15][1] = 'empty'

    expect(state[15][2]).to.have.string('full')
    expect(state[15][1]).to.have.string('empty')
    expect(state[16][1]).to.have.string('player')
    expect(state[16][2]).to.have.string('empty')

    state = horizontalMovement(state, 'right')

    expect(state[15][2]).to.have.string('full')
    expect(state[15][1]).to.have.string('empty')
    expect(state[16][2]).to.have.string('player')
    expect(state[16][1]).to.have.string('empty')
  })
})
