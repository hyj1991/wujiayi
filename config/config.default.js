'use strict';
const path = require('path');

module.exports = app => {
  return {
    keys: 'i love wujiayi',

    static: {
      dynamic: true,
      preload: false,
      buffer: false,
      maxFiles: 1000,
    },

    view: {
      defaultExtension: '.html',
      mapping: {
        '.ejs': 'ejs',
        '.html': 'ejs'
      }
    },

    ejs: {
      root: path.join(__dirname, '../app/view'),
      viewExt: 'ejs',
      cache: true
    },
  }
};