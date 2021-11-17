const config = plop => {
  plop.setGenerator('Component', {
    description: 'Generate a Presentational React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to name your component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.jsx',
        templateFile: 'internals/generators/templates/Component.jsx.hbs'
      }
    ]
  })
  plop.setGenerator('Container', {
    description: 'Generate a Container React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to name your component?'
      },
      {
        type: 'input',
        name: 'sliceName',
        message: 'Which slice do you want to connect to this container ?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.jsx',
        templateFile: 'internals/generators/templates/Component/Component.jsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.js',
        templateFile: 'internals/generators/templates/Container/index.js.hbs'
      }
    ]
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
