const path = require("path")
const wrapForPnp = (packageName) =>
  path.dirname(require.resolve(path.join(packageName, "package.json")))

export default {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    wrapForPnp("@storybook/addon-links"),
    wrapForPnp("@storybook/addon-essentials"),
    wrapForPnp("@storybook/preset-create-react-app"),
    wrapForPnp("@storybook/addon-interactions"),
  ],
  "framework": {
    name: wrapForPnp("@storybook/react-webpack5"),
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "staticDirs": [
    "../public"
  ]
};
