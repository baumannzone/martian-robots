// Strings
const NEWLINE = '\n'
const BLANK_SPACE = ' '
const EMPTY_STRING = ''
const LOST = 'LOST'

// Coords
const COORDS = {
  NORTH: 'N',
  SOUTH: 'S',
  EAST: 'E',
  WEST: 'W'
}

// Instructions
const INSTRUCTIONS = {
  LEFT: 'L',
  RIGHT: 'R',
  FORWARD: 'F'
}


// Errors
const ERRORS = {
  INSTRUCTION_NO_GREATER_100: 'The robot can only receive instruction until 100 characters',
  GRID_NO_GREATER_50: 'Grid size can\'t be greater than 50x50',
  GRID_NO_SMALLER_1: 'Grid size can\'t be smaller than 1x1'
}

module.exports = {
  NEWLINE,
  BLANK_SPACE,
  EMPTY_STRING,
  LOST,
  ERRORS,
  INSTRUCTIONS,
  COORDS
}
