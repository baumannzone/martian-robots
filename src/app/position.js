const {COORDS, LOST, EMPTY_STRING} = require('../constants')

class Position {
  constructor() {
    this.x = 0
    this.y = 0
    this.orientation = COORDS.NORTH
    this.lost = false
  }

  toString() {
    const lostText = this.lost ? ` ${LOST}` : EMPTY_STRING
    return `${this.x} ${this.y} ${this.orientation}${lostText}`
  }

  isOffTheGrid(grid) {
    if (this.x > grid.width || this.y > grid.height || this.x < 0 || this.y < 0) {

      // Max value for y
      if (this.orientation === COORDS.NORTH) {
        this.y = grid.height
      }

      if (this.orientation === COORDS.SOUTH) {
        this.y = 0
      }

      // Max value for x
      if (this.orientation === COORDS.EAST) {
        this.x = grid.width
      }

      if (this.orientation === COORDS.WEST) {
        this.x = 0
      }

      this.lost = true
      return this.lost
    }
    return false
  }

  isLost () {
    return this.lost
  }
}

module.exports = Position
