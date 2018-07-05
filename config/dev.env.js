'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://www.laravel-kong.com"'
  BASE_API: '"http://kong.missxiaolin.com"'
})
