const { sliceExists, componentExists, slices } = require('./internals/generators/utils/fileExists')

const componentPrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What do you want to name your component?',
    validate: value => {
      if (!value) { return 'Name is required' }
      if (componentExists(value)) { return 'This component already exists' }
      return true
    }
  },
  {
    type: 'confirm',
    name: 'memo',
    message: 'Do you want wrap this component in React.memo?',
    default: false
  }
]
const componentActions = (path) => [
  {
    type: 'add',
    path: `src/${path}/{{properCase name}}/{{properCase name}}.jsx`,
    templateFile: 'internals/generators/templates/Component/Component.jsx.hbs'
  }
]
const containerPrompts = [
  ...componentPrompts,
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
const containerActions = (path) => (data) => {
  const actions = [
    ...componentActions(path),
    {
      type: 'add',
      path: `src/${path}/{{properCase name}}/index.js`,
      templateFile: 'internals/generators/templates/Container/index.js.hbs'
    }]
  if (!sliceExists(data.sliceName)) {
    actions.push(
      {
        type: 'add',
        path: `src/features/${data.sliceName}/${data.sliceName}Slice.js`,
        templateFile: 'internals/generators/templates/Feature/slice.js.hbs'
      })
    actions.push({
      type: 'add',
      path: `src/features/${data.sliceName}/${data.sliceName}API.js`,
      templateFile: 'internals/generators/templates/Feature/api.js.hbs'
    })
  }
  return actions
}
const pagePrompts = [
  ...containerPrompts
]
const pageActions = (path) => (data) => [
  ...containerActions(path)(data)

]
const config = plop => {
  plop.setGenerator('Component', {
    description: 'Generate a Presentational React Component',
    prompts: componentPrompts,
    actions: componentActions('components')
  })
  plop.setGenerator('Container', {
    description: 'Generate a Container React Component',
    prompts: containerPrompts,
    actions: containerActions('components')
  })
  plop.setGenerator('Container', {
    description: 'Generate a Container React Component',
    prompts: containerPrompts,
    actions: containerActions('components')
  })
  plop.setGenerator('Page', {
    description: 'Generate a Page',
    prompts: pagePrompts,
    actions: pageActions('pages')
  })
  plop.setGenerator('Feature', {
    description: 'Generate a redux Slice inside the features folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to name your feature?'
      }
    ],
    actions: [
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
  })
}
module.exports = config
