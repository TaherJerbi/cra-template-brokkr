const { baseActions } = require('./component')
const { containerGenerator } = require('./container')

const pagePrompts = [
  ...containerGenerator.prompts
]

const pageActions = baseActions('pages')('Page')
module.exports = {
  pageGenerator: {
    description: 'Generate a Page',
    prompts: pagePrompts,
    actions: pageActions
  }
}
