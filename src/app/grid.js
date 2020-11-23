const { ERRORS } = require('../constants')

class Grid {
  constructor (width = 0, height = 0) {
    if (width > 50 || height > 50) {
      throw new Error(ERRORS.GRID_NO_GREATER_50)
    }

    if (width < 0 || height < 0) {
      throw new Error(ERRORS.GRID_NO_SMALLER_1)
    }

    this._width = width
    this._height = height
    this.forbiddenPositions = []
  }

  get width () {
    return this._width
  }

  get height () {
    return this._height
  }

  addForbiddenPosition (position) {
    this.forbiddenPositions.push(position)
  }

  positionIsForbidden (position) {
    return this.forbiddenPositions.some(pos => JSON.stringify(position) === JSON.stringify(pos))
  }
}

module.exports = Grid
