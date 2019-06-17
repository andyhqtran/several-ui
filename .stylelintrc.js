module.exports = {
  "extends": [
    "@several/stylelint-config",
    "stylelint-config-styled-components",
  ],
  "processors": [
    [
      "stylelint-processor-styled-components",
      {
        "parserPlugins": [
          "jsx",
          "classProperties",
          "exportDefaultFrom",
        ],
      },
    ],
  ],
  "rules": {
    "plugin/no-low-performance-animation-properties": [
      true,
      {
        "ignoreProperties": [
          "background-color",
          "box-shadow",
          "color",
        ],
      },
    ],
  },
}
