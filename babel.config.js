module.exports = {
  plugins: [
    ['transform-inline-environment-variables']
  ],
  env: {
    // Environment for transpiling files to be compatible with UMD.
    commonjs: {
      plugins: [
        ['@babel/plugin-transform-runtime', {
          corejs: false,
          helpers: false,
          regenerator: false,
          useESModules: false,
        }],
        ['@babel/plugin-transform-modules-commonjs', { loose: true }]
      ]
    },
    // Environment for transpiling files to be compatible with CommonJS.
    commonjs_dist: {
      plugins: [
        ['@babel/plugin-transform-modules-commonjs', { loose: true }],
      ],
    },
    // Environment for transpiling files to be compatible with ES Modules.
    es: {
      plugins: [],
    },
  },
};
