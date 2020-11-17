const Grid = require('./grid')
const Robot = require('./robot')

const { NEWLINE, BLANK_SPACE, EMPTY_STRING, ERRORS } = require('../constants.js')

/**
 * Group starting positions and robot instructions in one object
 * @param robots
 */
const groupRobots = (robots) => {
  let robot = {}
  const robotsGrouped = []
  robots.forEach((item, index) => {
    if (index === 0 || index % 2 === 0) {
      robot.startingPosition = item
    } else {
      robot.instructions = item
      robotsGrouped.push(robot)
      robot = {}
    }
  })
  return robotsGrouped
}

class Mars {
  constructor(instructions) {
    if (instructions.length > 100) {
      throw new Error(ERRORS.INSTRUCTION_NO_GREATER_100)
    }
    this.output = ''
    this.instructions = instructions.split(NEWLINE)
  }

  sendRobots() {
    const [gridSize, ...robotInstructions] = this.instructions
    const [gridWidth, gridHeight] = gridSize.split(BLANK_SPACE)
    const grid = new Grid(gridWidth, gridHeight)

    const robots = groupRobots(robotInstructions)

    robots.map(robotObj => {
      const robot = new Robot(grid)
      robot.setPosition(robotObj.startingPosition)
      robot.move(robotObj.instructions)
    })
    // let robot = new Robot(grid)
    // for (let i = 0; i < robotInstructions.length; i++) {
    //   const instruction = robotInstructions[i]
    //
    //   // New robot
    //   if (this.isNewRobot(instruction)) {
    //     robot = new Robot(grid)
    //   }
    //   // Initial position
    //   else if (this.isRobotStartPosition(instruction)) {
    //     robot.setPosition(instruction)
    //   }
    //   // Move robot
    //   else {
    //     const move = robot.move(instruction)
    //     this.output += (this.output.length > 0 ? NEWLINE : EMPTY_STRING) + move
    //   }
    // }

    return this.output
  }

  // isNewRobot(instruction) {
  //   return instruction === EMPTY_STRING
  // }
  //
  // isRobotStartPosition(instruction) {
  //   return instruction.includes(BLANK_SPACE)
  // }
}

module.exports = Mars
