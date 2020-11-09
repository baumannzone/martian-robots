const Position = require('./position')
const {BLANK_SPACE, INSTRUCTIONS, COORDS} = require('../constants.js')

//-----------
const isRightTurn = (instruction) => instruction === INSTRUCTIONS.RIGHT
const isLeftTurn = (instruction) => instruction === INSTRUCTIONS.LEFT
const isForwardMovement = (instruction) => instruction === INSTRUCTIONS.FORWARD

//-----------
const right = {
  [COORDS.NORTH]: COORDS.EAST,
  [COORDS.EAST]: COORDS.SOUTH,
  [COORDS.SOUTH]: COORDS.WEST,
  [COORDS.WEST]: COORDS.NORTH
}

const left = {
  [COORDS.NORTH]: COORDS.WEST,
  [COORDS.EAST]: COORDS.SOUTH,
  [COORDS.SOUTH]: COORDS.EAST,
  [COORDS.WEST]: COORDS.NORTH
}

class Robot {
  constructor(grid) {
    this.grid = grid
    this.position = new Position()
  }

  setPosition(startingPosition) {
    const [x, y, orientation] = startingPosition.split(BLANK_SPACE)
    this.position.x = x
    this.position.y = y
    this.position.orientation = orientation
    console.log('<<<startingPosition>>>')
    console.log(startingPosition)
  }

  move(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      // Current instruction
      const instruction = instructions.charAt(i)

      // R
      if (isRightTurn(instruction)) {
        this.turnRight()
      }

      // L
      if (isLeftTurn(instruction)) {
        this.turnLeft()
      }

      // F
      if (isForwardMovement(instruction)) {
        this.moveForward()
      }
    }

    return this.position.toString()
  }

  turnRight() {
    this.position.orientation = right[this.position.orientation]
  }

  turnLeft() {
    this.position.orientation = left[this.position.orientation]
  }

  moveForward() {
    const startingPosition = this.position

    // El robot no se ha caído del planeta
    // No está en una casilla prohibida
    if (this.position.lost || this.grid.hasForbiddenPosition(startingPosition)) {
      return
    }

    if (this.position.orientation === COORDS.NORTH) {
      this.position.y++
    }

    if (this.position.orientation === COORDS.SOUTH) {
      this.position.y--
    }

    if (this.position.orientation === COORDS.EAST) {
      this.position.x++
    }

    if (this.position.orientation === COORDS.WEST) {
      this.position.x--
    }

    // Comprobar que el robot no se ha salido de la rejilla (planeta)
    if (this.position.isOffTheGrid(this.grid)) {
      this.grid.addForbiddenPosition(startingPosition)
    }
  }

}

module.exports = Robot
