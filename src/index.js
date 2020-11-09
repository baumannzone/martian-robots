const Mars = require('./app/mars')

const instructions = '5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL'

const mars = new Mars(instructions)
console.log(mars.sendRobots())
