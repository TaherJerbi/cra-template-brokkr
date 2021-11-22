const { componentGenerator, baseActions } = require('./component')
const { slices } = require('./utils/fileExists')

const containerPrompts = [
  ...componentGenerator.prompts,
  {
    type: 'list',
    choices: slices,
    name: 'sliceName',
    message: 'Which slice do you want to connect to this container ?',
    validate: value => {
      if (!value) { return 'You have to specify a slice name.' }

      return true
    }
  }
]
const containerActions = baseActions('components')('Container')

module.exports = {
  containerGenerator: {
    description: 'Generate a Container Component ( connected to the redux store )',
    prompts: containerPrompts,
    actions: containerActions
  }
}
