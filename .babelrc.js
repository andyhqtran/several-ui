module.exports = {
  "presets": [
    [
      '@babel/preset-env',
      {
        "loose": true,
        "modules": process.env.BABEL_ENV === 'cjs' ? 'commonjs' : false,
      },
    ],
    '@babel/preset-react',
  ],
  'plugins': [
    '@babel/plugin-proposal-export-default-from',
  ],
};
