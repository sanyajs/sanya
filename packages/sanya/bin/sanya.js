#!/usr/bin/env node

process.env.DID_YOU_KNOW = 'none';

// disable since it's conflicted with typescript cjs + dynamic import
// require('v8-compile-cache');
require('../dist/cli/cli')
  .run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
