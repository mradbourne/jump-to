#!/usr/bin/env node
'use strict'
const meow = require('meow')

const cli = meow(`
    Usage
      $ jt <input>
 
    Options
      -r, --rainbow  Include a rainbow
 
    Examples
      $ jt git --rainbow
`, {
  alias: {
    i: 'init'
  }
})

console.log(cli.input[0], cli.flags)
