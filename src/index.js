const Mars = require('./app/mars')

const instructions = `5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`

const mars = new Mars(instructions)
const output = mars.sendRobots()

console.log('OUTPUT: ')
console.log(output)
