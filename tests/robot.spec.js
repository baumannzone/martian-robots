const Robot = require('../src/app/robot.js')
const Grid = require('../src/app/grid.js')

const { COORDS, ERRORS } = require('../src/constants')

describe('A new robot is created in a 2x2 Grid', () => {
  const grid = new Grid(2, 2)

  test('lands on Mars facing North', () => {
    const robot = new Robot(grid)

    const position = robot.getPosition()

    expect(position.orientation).toBe(COORDS.NORTH)
  })

  test('lands on Mars in the bottom left corner of the grid [0,0]', () => {
    const robot = new Robot(grid)

    const position = robot.getPosition()

    expect(position.x).toBe(0)
    expect(position.y).toBe(0)
  })

  test('lands on Mars and it is not lost', () => {
    const robot = new Robot(grid)

    expect(robot.isLost).toBe(false)
  })

  test('robot can turn left to face West', () => {
    const robot = new Robot(grid)

    robot.turnLeft()
    const orientation = robot.getPosition().orientation

    expect(orientation).toBe(COORDS.WEST)
  })

  test('robot can turn left 2 times to face South', () => {
    const robot = new Robot(grid)

    robot.turnLeft()
    robot.turnLeft()
    const orientation = robot.getPosition().orientation

    expect(orientation).toBe(COORDS.SOUTH)
  })

  test('robot can turn left 3 times to face East', () => {
    const robot = new Robot(grid)

    robot.turnLeft()
    robot.turnLeft()
    robot.turnLeft()
    const orientation = robot.getPosition().orientation

    expect(orientation).toBe(COORDS.EAST)
  })

  test('robot can turn left 4 times to face North', () => {
    const robot = new Robot(grid)

    robot.turnLeft()
    robot.turnLeft()
    robot.turnLeft()
    robot.turnLeft()
    const orientation = robot.getPosition().orientation

    expect(orientation).toBe(COORDS.NORTH)
  })

  test('robot can turn right to face East', () => {
    const robot = new Robot(grid)

    robot.turnRight()
    const orientation = robot.getPosition().orientation

    expect(orientation).toBe(COORDS.EAST)
  })

  test('robot can turn right 2 times to face South', () => {
    const robot = new Robot(grid)

    robot.turnRight()
    robot.turnRight()
    const orientation = robot.getPosition().orientation

    expect(orientation).toBe(COORDS.SOUTH)
  })

  test('robot can turn right 3 times to face West', () => {
    const robot = new Robot(grid)

    robot.turnRight()
    robot.turnRight()
    robot.turnRight()
    const orientation = robot.getPosition().orientation

    expect(orientation).toBe(COORDS.WEST)
  })

  test('robot can turn right 4 times to face North', () => {
    const robot = new Robot(grid)

    robot.turnRight()
    robot.turnRight()
    robot.turnRight()
    robot.turnRight()
    const orientation = robot.getPosition().orientation

    expect(orientation).toBe(COORDS.NORTH)
  })

  test('robot can move forwards when facing North', () => {
    const robot = new Robot(grid)
    const expectedPosition = { x: 0, y: 1, orientation: COORDS.NORTH }
    robot.moveForward()

    expect(robot.getPosition()).toMatchObject(expectedPosition)
  })

  test('robot can move forwards when facing East', () => {
    const robot = new Robot(grid)
    const initialPosition = `0 0 ${COORDS.EAST}`
    const expectedPosition = { x: 1, y: 0, orientation: COORDS.EAST }

    robot.setPosition(initialPosition)
    robot.moveForward()

    expect(robot.getPosition()).toMatchObject(expectedPosition)
  })

  test('robot can move forwards when facing South', () => {
    const robot = new Robot(grid)
    const initialPosition = `0 1 ${COORDS.SOUTH}`
    const expectedPosition = { x: 0, y: 0, orientation: COORDS.SOUTH }

    robot.setPosition(initialPosition)
    robot.moveForward()

    expect(robot.getPosition()).toMatchObject(expectedPosition)
  })

  test('robot can receive multiple instructions [LRRFLRF]', () => {
    const robot = new Robot(grid)
    const instructions = 'LRRFLRF'

    expect(() => {
      robot.move(instructions)
    }).not.toThrow(new Error(ERRORS.INVALID_INSTRUCTION))
  })

  test('robot should throw an exception when the instructions are wrong [FFABC]', () => {
    const robot = new Robot(grid)
    const instructions = 'FFABC'

    expect(() => {
      robot.move(instructions)
    }).toThrow(new Error(ERRORS.INVALID_INSTRUCTION))
  })

})

describe('In a 4x4 Grid and a Robot in a position of [3,2] facing East', () => {
  const grid = new Grid(3, 3)

  test('robot is facing East', () => {
    const robot = new Robot(grid)
    const initialPosition = `3 2 ${COORDS.EAST}`

    robot.setPosition(initialPosition)

    expect(robot.getPosition().orientation).toBe(COORDS.EAST)
  })

  test('robot is positioned at [3,2]', () => {
    const robot = new Robot(grid)
    const initialPosition = `3 2 ${COORDS.EAST}`

    robot.setPosition(initialPosition)
    const positionOutput = robot.getPosition()

    expect(positionOutput.x).toBe(3)
    expect(positionOutput.y).toBe(2)
  })
})

describe('In a Grid of 1x1 (height = 0, length = 0) and two robots', () => {

  test('when robot 1 falls of the grid, it\'s lost', () => {
    const grid = new Grid()
    const robot1 = new Robot(grid)

    robot1.moveForward()

    expect(robot1.isLost).toBe(true)
  })

  test('when robot 1 falls of the grid it is in the same position', () => {
    const grid = new Grid()
    const robot1 = new Robot(grid)
    const expectedPosition = { x: 0, y: 0, orientation: COORDS.NORTH }

    robot1.moveForward()
    const positionOutput = robot1.getPosition()

    expect(positionOutput).toMatchObject(expectedPosition)
  })

  test('when robot 1 falls of the grid, the robot can no longer move', () => {
    const grid = new Grid()
    const robot1 = new Robot(grid)
    const expectedPosition = { x: 0, y: 0, orientation: COORDS.NORTH }

    robot1.moveForward()
    // Robot is lost
    robot1.moveForward()
    robot1.moveForward()
    const positionOutput = robot1.getPosition()

    expect(positionOutput).toMatchObject(expectedPosition)
  })

  test('when robot 2 tries get lost in the same place that robot 1, robot 2 it isn\'t lost', () => {
    const grid = new Grid()
    const robot1 = new Robot(grid)
    const robot2 = new Robot(grid)

    robot1.moveForward()
    robot2.moveForward()

    expect(robot1.isLost).toBe(true)
    expect(robot2.isLost).toBe(false)
  })

  test('when robot 2 tries get lost in the same place that robot 1, robot 2 can\' t move forwards in that direction', () => {
    const grid = new Grid()
    const robot1 = new Robot(grid)
    const robot2 = new Robot(grid)
    const expectedPosition = { x: 0, y: 0, orientation: COORDS.NORTH }

    robot1.moveForward()
    robot2.moveForward()
    const positionOutput = robot2.getPosition()

    expect(positionOutput).toMatchObject(expectedPosition)
  })
})
