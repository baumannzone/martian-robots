/* eslint-disable no-new */
const Grid = require('../src/app/grid.js')
const { ERRORS } = require('../src/constants')

describe('A Grid', () => {
  test('with a height greater than 50 (51) should throw an error', () => {
    expect(() => {
      new Grid(10, 51)
    }).toThrow(new Error(ERRORS.GRID_NO_GREATER_50))
  })

  test('with a width greater than 50 (51) should throw an error', () => {
    expect(() => {
      new Grid(51, 10)
    }).toThrow(new Error(ERRORS.GRID_NO_GREATER_50))
  })

  test('with a negative height (-1) should throw an error', () => {
    expect(() => {
      new Grid(10, -1)
    }).toThrow(new Error(ERRORS.GRID_NO_SMALLER_1))
  })

  test('with a negative width (-1) should throw an error', () => {
    expect(() => {
      new Grid(-1, 10)
    }).toThrow(new Error(ERRORS.GRID_NO_SMALLER_1))
  })

  test('with the width and height equal to 0, it works', () => {
    expect(() => {
      new Grid(0, 0)
    }).not.toThrow(new Error(ERRORS.GRID_NO_SMALLER_1))
  })

  test('with the width and height greater than 50 should throw an error', () => {
    expect(() => {
      new Grid(51, 51)
    }).toThrow(new Error(ERRORS.GRID_NO_GREATER_50))
  })
})
