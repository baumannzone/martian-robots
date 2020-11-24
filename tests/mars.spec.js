/* eslint-disable no-new */
const Mars = require('../src/app/mars.js')
const { ERRORS } = require('../src/constants')

const instructions = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'
const longInstructions = '5 3\n1 1 E\nRFRFRFRAFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'
const output = `1 1 E
3 3 N LOST
2 3 S`

describe('When I send some robot\'s instructions to explore Mars', () => {
  test('I can get the final result, including if some is lost', () => {
    const mars = new Mars(instructions)
    const result = mars.sendRobots()

    expect(result).toEqual(output)
  })

  test('should throw an error if given instructions are longer than 100 characters', () => {
    expect(() => {
      new Mars(longInstructions)
    }).toThrow(new Error(ERRORS.INSTRUCTION_NO_GREATER_100))
  })
})
