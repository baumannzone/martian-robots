const { COORDS } = require('../constants')

class Position {
  constructor () {
    this._x = 0
    this._y = 0
    this._orientation = COORDS.NORTH
  }

  get x () {
    return this._x
  }

  /**
   * Returns "x" coord
   * @param x {Number} X coord
   */
  set x (x) {
    this._x = Number(x)
  }

  get y () {
    return this._y
  }

  /**
   * Returns "y" coord
   * @param y {Number}
   */
  set y (y) {
    this._y = Number(y)
  }

  get orientation () {
    return this._orientation
  }

  /**
   *
   * @param orientation {String}
   */
  set orientation (orientation) {
    this._orientation = orientation
  }

  isOffTheGrid (grid) {
    if (this.x > grid.width || this.y > grid.height || this.x < 0 || this.y < 0) {
      switch (this.orientation) {
        case COORDS.NORTH:
          this.y = grid.height
          break
        case COORDS.SOUTH:
          this.y = 0
          break
        case COORDS.EAST:
          this.x = grid.width
          break
        case COORDS.WEST:
          this.x = 0
          break
      }
      return true
    }
    return false
  }
}

module.exports = Position
