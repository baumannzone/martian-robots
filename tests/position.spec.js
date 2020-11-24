const Grid = require('../src/app/grid.js')
const Position = require('../src/app/position.js')

const { COORDS } = require('../src/constants')

describe('In a Grid of 3x3', () => {
  const grid = new Grid(2, 2)

  test('when robot coordinates are [1,5], robot is lost', () => {
    const position = new Position()
    position.x = 1
    position.y = 5

    const isLost = position.isOffTheGrid(grid)
    expect(isLost).toBe(true)
  })

  test('when robot coordinates are [5,1], robot is lost', () => {
    const position = new Position()
    position.x = 5
    position.y = 1
    position.orientation = COORDS.EAST

    const isLost = position.isOffTheGrid(grid)
    expect(isLost).toBe(true)
  })

  test('when robot coordinates are [1,-2], robot is lost', () => {
    const position = new Position()
    position.x = 1
    position.y = -2
    position.orientation = COORDS.SOUTH

    const isLost = position.isOffTheGrid(grid)
    expect(isLost).toBe(true)
  })

  test('when robot coordinates are [-2,1], robot is lost', () => {
    const position = new Position()
    position.x = -2
    position.y = 1
    position.orientation = COORDS.WEST

    const isLost = position.isOffTheGrid(grid)
    expect(isLost).toBe(true)
  })

  test('when robot coordinates are [1,1], robot is not lost', () => {
    const expectedPosition = { x: 1, y: 1, orientation: COORDS.NORTH }
    const position = new Position()
    position.x = 1
    position.y = 1

    const isLost = position.isOffTheGrid(grid)
    expect(isLost).toBe(false)
    const finalPosition = { x: position.x, y: position.y, orientation: position.orientation }
    expect(finalPosition).toMatchObject(expectedPosition)
  })

  // --

  test('when robot is off the grid facing North, coordinate `y` is equal to 2', () => {
    const position = new Position()
    position.x = 1
    position.y = 5
    position.orientation = COORDS.NORTH

    position.isOffTheGrid(grid)
    expect(position.y).toBe(2)
  })

  test('when robot is off the grid facing South, coordinate `y` is equal to 0', () => {
    const position = new Position()
    position.x = 1
    position.y = 5
    position.orientation = COORDS.SOUTH

    position.isOffTheGrid(grid)
    expect(position.y).toBe(0)
  })

  test('when robot is off the grid facing East, coordinate `x` is equal to 2', () => {
    const position = new Position()
    position.x = 1
    position.y = 5
    position.orientation = COORDS.EAST

    position.isOffTheGrid(grid)
    expect(position.x).toBe(2)
  })

  test('when robot is off the grid facing East, coordinate `x` is equal to 0', () => {
    const position = new Position()
    position.x = 1
    position.y = 5
    position.orientation = COORDS.WEST

    position.isOffTheGrid(grid)
    expect(position.x).toBe(0)
  })
})
