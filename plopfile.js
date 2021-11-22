const { componentGenerator } = require('./internals/generators/component')
const { containerGenerator } = require('./internals/generators/container')
const { featureGenerator } = require('./internals/generators/feature')
const { pageGenerator } = require('./internals/generators/page')

const config = plop => {
  plop.setGenerator('Component', componentGenerator)
  plop.setGenerator('Container', containerGenerator)
  plop.setGenerator('Page', pageGenerator)
  plop.setGenerator('Feature', featureGenerator)
}
module.exports = config
