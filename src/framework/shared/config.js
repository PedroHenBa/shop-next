/* eslint-disable */

const path = require('path');
const merge = require('deepmerge');
const fs = require('fs');
const prettier = require('prettier');

const ALLOWED_FW = ['shopify', 'shopify_local'];
const FALLBACK_FW = 'shopify';

function withFrameWorkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name || FALLBACK_FW;


  if(!ALLOWED_FW.includes(framework)){
    throw new Error(`the api ${framework} cannot be found`);
  }

  if(framework === 'shopify_local'){
    framework = FALLBACK_FW;
  }


  const frameworkNextConfig = require(path.join('../', framework, 'next.config'));
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`];

  fs.writeFileSync(tsPath, prettier.format(JSON.stringify(tsConfig), { parser: 'json' }));

  return config;
}

module.exports = { withFrameWorkConfig };
