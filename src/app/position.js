const { COORDS } = require('../constants')

class Position {
  constructor() {
    this._x = 0
    this._y = 0
    this._orientation = COORDS.NORTH
  }

  get x() {
    return this._x
  }

  set x(x) {
    this._x = x
  }

  get y() {
    return this._y
  }

  set y(y) {
    this._y = y
  }

  get orientation() {
    return this._orientation
  }

  set orientation(orientation) {
    this._orientation = orientation
  }

  // isOffTheGrid(grid) {
  //   if (this.x > grid.width || this.y > grid.height || this.x < 0 || this.y < 0) {
  //
  //     // Max value for y
  //     if (this.orientation === COORDS.NORTH) {
  //       this.y = grid.height
  //     }
  //
  //     if (this.orientation === COORDS.SOUTH) {
  //       this.y = 0
  //     }
  //
  //     // Max value for x
  //     if (this.orientation === COORDS.EAST) {
  //       this.x = grid.width
  //     }
  //
  //     if (this.orientation === COORDS.WEST) {
  //       this.x = 0
  //     }
  //
  //     this.lost = true
  //     return this.lost
  //   }
  //   return false
  // }
}

module.exports = Position
