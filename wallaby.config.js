'use strict';

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      { pattern: 'src/**/*.tests.js', ignore: true }
    ],
    tests: [
      'src/**/*.tests.js'
    ],
    env: {
      type: 'node',
      //runner: '/usr/local/bin/babel-node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: ['es2015', 'stage-0']
        // babel options
        // like `stage: n` for Babel 5.x or `presets: [...]` for Babel 6
      })
    }
  }
};
