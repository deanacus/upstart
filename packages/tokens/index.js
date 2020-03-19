const path = require('path');
const fs = require('fs');
const compile = require('./builder');

const inputPath = path.resolve('./src/');
const outputPath = path.resolve('./dist/');
const formats = ['javascript', 'css'];

fs.readdirSync(inputPath).map(file => {
  const input = `${inputPath}/${file}`;
  const output = `${outputPath}/${file.slice(0,-5)}`
  compile(input, output, formats);
});