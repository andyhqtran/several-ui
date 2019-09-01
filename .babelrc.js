module.exports = {
  "presets": [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  'plugins': [
    '@babel/plugin-proposal-export-default-from',
    [
      'babel-plugin-styled-components',
      {
        'displayName': true,
        'ssr': true,
      },
    ],
  ],
};
