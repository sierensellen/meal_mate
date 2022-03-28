module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  "addons": [
    "storybook-addon-next",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}