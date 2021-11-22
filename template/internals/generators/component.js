const { componentExists } = require('./utils/fileExists')

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
  },
  {
    type: 'confirm',
    name: 'i18n',
    message: 'Do you want to use the i18n hook ?',
    default: false
  },
  {
    type: 'confirm',
    name: 'wantLoadable',
    default: false,
    message: 'Do you want to load the component asynchronously?'
  }
]

const baseActions = (path) => (templatePath) => (data) => {
  const actions = [
    {
      type: 'add',
      path: `src/${path}/{{properCase name}}/{{properCase name}}.jsx`,
      templateFile: 'internals/generators/templates/Component/Component.jsx.hbs'
    },
    {
      type: 'add',
      path: `src/${path}/{{properCase name}}/index.js`,
      templateFile: `internals/generators/templates/${templatePath}/index.js.hbs`
    }
  ]
  if (data.wantLoadable) {
    actions.push({
      type: 'add',
      path: `src/${path}/{{properCase name}}/Loadable.js`,
      templateFile: 'internals/generators/templates/Component/Loadable.js.hbs'
    })
  }
  return actions
}
const componentActions = baseActions('components')('Component')
module.exports = {
  componentGenerator: {
    description: 'Generate a Presentational React Component',
    prompts: componentPrompts,
    actions: componentActions
  },
  baseActions
}
