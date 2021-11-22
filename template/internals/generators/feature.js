const { slices } = require('./utils/fileExists')
const featurePrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What do you want to name your feature?',
    validate: value => slices.map(e => e.toLowerCase()).includes(value.toLowerCase()) ? 'Feature already exists' : true
  }
]

const featureActions = [
  {
    type: 'add',
    path: 'src/features/{{name}}/{{name}}Slice.js',
    templateFile: 'internals/generators/templates/Feature/slice.js.hbs'
  },
  {
    type: 'add',
    path: 'src/features/{{name}}/{{name}}API.js',
    templateFile: 'internals/generators/templates/Feature/api.js.hbs'
  }
]
module.exports = {
  featureGenerator: {
    description: 'Generate a redux Slice inside the features folder',
    prompts: featurePrompts,
    actions: featureActions
  }
}
