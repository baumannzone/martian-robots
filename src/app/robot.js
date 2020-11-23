const Position = require('./position')
const { BLANK_SPACE, INSTRUCTIONS, COORDS, ERRORS } = require('../constants.js')

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
  constructor (grid) {
    this.grid = grid
    this.position = new Position()
    this.isLost = false
  }

  setStartingPosition (startingPosition) {
    const [x, y, orientation] = startingPosition.split(BLANK_SPACE)
    this.position.x = x
    this.position.y = y
    this.position.orientation = orientation
  }

  move (instructions) {
    for (let i = 0; i < instructions.length; i++) {
      if (this.isLost) {
        break
      }

      const instruction = instructions.charAt(i)

      switch (instruction) {
        case INSTRUCTIONS.LEFT:
          this.turnLeft()
          break
        case INSTRUCTIONS.RIGHT:
          this.turnRight()
          break
        case INSTRUCTIONS.FORWARD:
          this.moveForward()
          break
        default:
          throw new Error(ERRORS.INVALID_INSTRUCTION)
      }
    }

    return `${this.position.x} ${this.position.y} ${this.position.orientation}${this.isLost ? ' LOST' : ''}`
  }

  moveForward () {
    const initialPosition = { x: this.position.x, y: this.position.y, orientation: this.position.orientation }

    if (this.isLost || this.grid.positionIsForbidden(initialPosition)) {
      return
    }

    switch (this.position.orientation) {
      case COORDS.NORTH:
        this.position.y++
        break
      case COORDS.SOUTH:
        this.position.y--
        break
      case COORDS.EAST:
        this.position.x++
        break
      case COORDS.WEST:
        this.position.x--
        break
    }

    if (this.position.isOffTheGrid(this.grid)) {
      this.isLost = true
      this.grid.addForbiddenPosition(initialPosition)
    }
  }

  turnRight () {
    this.position.orientation = right[this.position.orientation]
  }

  turnLeft () {
    this.position.orientation = left[this.position.orientation]
  }
}

module.exports = Robot
