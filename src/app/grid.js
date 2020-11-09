const {ERRORS} = require('../constants')

class Grid {
  /**
   * x, y
   * @param width {Number} - (x)
   * @param height {Number} - (y)
   */
  constructor(width = 0, height = 0) {
    if (width > 50 || height > 50) {
      throw new Error(ERRORS.GRID_NO_GREATER_50)
    }

    if (width < 0 || height < 0) {
      throw new Error(ERRORS.GRID_NO_SMALLER_1)
    }

    this.width = width
    this.height = height
    this.forbiddenPositions = []
  }

  addForbiddenPosition(position) {
    console.log('POSITION PROHIBIDA <position>')
    console.log(position)
    this.forbiddenPositions.push(position)
  }

  hasForbiddenPosition(position) {
    return this.forbiddenPositions.includes(position)
  }
}

module.exports = Grid
