import { expect } from 'chai'
import floorTemplate from '../../src/patterns/floor-template'
import { spawnPlayer, findPlayer } from '../../src/utils/player-tools'

describe('Find Player', () => {
  it('should find the x,y coordinates of the player cells', () => {
    let state = spawnPlayer(floorTemplate(), 1, 0)
    let playerCells = findPlayer(state)
    expect(playerCells).to.eql([[0, 0], [1, 0]])

    state = spawnPlayer(floorTemplate(), 10, 10)
    playerCells = findPlayer(state)
    expect(playerCells).to.eql([[9, 10], [10, 10]])

    state = floorTemplate()
    playerCells = findPlayer(state)
    expect(playerCells).to.not.exist
  })
})
