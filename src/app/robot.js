const Position = require('./position')
const { BLANK_SPACE, INSTRUCTIONS, COORDS } = require('../constants.js')

const isLeftTurn = (instruction) => instruction === INSTRUCTIONS.LEFT
const isRightTurn = (instruction) => instruction === INSTRUCTIONS.RIGHT
const isForwardMovement = (instruction) => instruction === INSTRUCTIONS.FORWARD

const right = {
  [COORDS.NORTH]: COORDS.EAST,
  [COORDS.EAST]: COORDS.SOUTH,
  [COORDS.SOUTH]: COORDS.WEST,
  [COORDS.WEST]: COORDS.NORTH
}
const left = {
  [COORDS.NORTH]: COORDS.WEST,
  [COORDS.WEST]: COORDS.SOUTH,
  [COORDS.SOUTH]: COORDS.EAST,
  [COORDS.EAST]: COORDS.NORTH
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
  }

  move(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      if (this.position.getLost()) {
        break
      }

      const instruction = instructions.charAt(i)

      if (isLeftTurn(instruction)) {
        this.turnLeft()
      }

      if (isRightTurn(instruction)) {
        this.turnRight()
      }

      if (isForwardMovement(instruction)) {
        this.moveForward()
      }
    }

    return this.position.toString()
  }

  moveForward() {
    const startingPosition = this.position

    // TODO: FIX
    if (this.position.getLost() || this.grid.hasForbiddenPosition(startingPosition)) {
      console.log('>>>>')
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

    if (this.position.isOffTheGrid(this.grid)) {
      this.grid.addForbiddenPosition(startingPosition)
    }
  }

  turnRight() {
    this.position.orientation = right[this.position.orientation]
  }

  turnLeft() {
    this.position.orientation = left[this.position.orientation]
  }

}

module.exports = Robot
