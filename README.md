# es6-browser-boilerplate

> Minimal boilerplate for browser-based ES6 (ES2015) JavaScript projects.

## Features

* Transpiles [ES6 (ES2015)](http://www.ecma-international.org/ecma-262/6.0/) syntax using [Babel](https://babeljs.io/)
* Uses [Rollup](https://rollupjs.org) to bundle modules and generates 3 builds for [CJS (CommonJS)](http://www.commonjs.org/), [ESM (ES Modules)](https://v8.dev/features/modules), and [UMD (Universal Module Definition)](https://github.com/umdjs/umd)
* Code linting courtesy of [ESLint](http://eslint.org/)
* Unit testing with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/) using the [Karma](https://karma-runner.github.io) test runner inside [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome)
* Code minification via [babel-minify](https://github.com/babel/minify)
* Includes `.travis.yml` file to support continuous integration with [Travis CI](https://travis-ci.org/)
* Automatically includes a (configurable) banner to the distributed builds

## Setup

1. Run `npm install` to install the developmental dependencies
2. Open `package.json` and change the relevant fields: `name`, `description`, `homepage`, etc.
3. Open `rollup.config.js` and make the necessary changes to reflect your preferences

## Commands

* `npm test` - Run unit tests
* `npm run lint` - Lint source files and test specs
* `npm run build` - Bundle, transpile, and minify the source into the distributed builds

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).