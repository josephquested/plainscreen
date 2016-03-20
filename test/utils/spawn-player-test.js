import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'
import { spawnPlayer } from '../../src/utils/player-tools'

describe('Spawn Player', () => {
  it('should spawn a player on the board', () => {
    let state = floorTemplate()
    state = spawnPlayer(state, 16, 20)
    expect(state[15][20]).to.have.string('player')
    expect(state[16][20]).to.have.string('player')
    expect(state[15]).to.have.length(40)
    expect(state[16]).to.have.length(40)
  })
})
