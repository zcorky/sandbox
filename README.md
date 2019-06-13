# sandbox

[![NPM version](https://img.shields.io/npm/v/@zcorky/sandbox.svg?style=flat)](https://www.npmjs.com/package/@zcorky/sandbox)
[![NPM quality](http://npm.packagequality.com/shield/%40zcorky%2Fsandbox.svg)](http://packagequality.com/#?package=@zcorky/sandbox)
[![Coverage Status](https://codecov.io/gh/zcorky/sandbox/branch/master/graph/badge.svg)](https://codecov.io/gh/zcorky/sandbox)
[![Dependencies](https://img.shields.io/david/zcorky/sandbox.svg?style=flat-square)](https://david-dm.org/zcorky/sandbox)
[![Build Status](https://travis-ci.com/zcorky/sandbox.svg?branch=master)](https://travis-ci.com/zcorky/sandbox)
[![Known Vulnerabilities](https://snyk.io/test/npm/@zcorky/sandbox/badge.svg?style=flat-square)](https://snyk.io/test/npm/@zcorky/sandbox)
[![NPM download](https://img.shields.io/npm/dm/@zcorky/sandbox.svg?style=flat-square)](https://www.npmjs.com/package/@zcorky/sandbox)
![license](https://img.shields.io/github/license/zcorky/sandbox.svg)
[![issues](https://img.shields.io/github/issues/zcorky/sandbox.svg)](https://github.com/zcorky/sandbox/issues)

> A minimal API wrapper for localsandboxs, inspired by [tsironis/lockr](https://github.com/tsironis/lockr) and [marcuswestin/store.js](https://github.com/marcuswestin/store.js). It is written fully with Typescript.

* 🕒 Simple API, Easy to Use
* 🔥 TypeScript

## Install

```
$ npm install @zcorky/sandbox
```

## Usage


```js
import createSandbox from '@zcorky/sandbox';

// prepare raw 
const code = `return a + b`;

// create sandbox
const sandbox = createSanbox(code);

// run sandbox
sandbox({ a: 1, b: 2 }); // => 3
```

### API
* See the detailed [API Reference](./docs).

## License

MIT © [Moeover](https://moeover.com)
