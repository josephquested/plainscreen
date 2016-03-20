# plainscreen

videogame

bugs:
if the player hits the edge of the screen while physics are being applied,
the game crashes:
 player-tools.js:13 Uncaught TypeError: Cannot read property '1' of null
 (13. let playerRow = playerCells[1][0])
 fix? Check to see if the player is on the screen before applying physics.
