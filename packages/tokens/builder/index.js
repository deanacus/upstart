const fs = require("fs");

const capitaliseWord = (word) => {
  return word.split('').map((char, ind) => ind === 0 ? char.toUpperCase() : char).join('')
}

const compileTokensToObj = (raw) => raw.tokens.reduce((result, {name, value, aliases}) => {
  result[name] = value;
  if (aliases) {
    aliases.forEach(alias => result[alias] = value)
  }
  return result
}, {})

const compileToJS = (raw) => {
  const tokens = JSON.stringify(compileTokensToObj(raw));
  return `export const ${raw.group} = ${tokens}`
};

const compileToJSON = (raw) => {
  return JSON.stringify(compileTokensToObj(raw));
};

const compileToCSS = (raw) => {
  const prefix = raw.group;
  const tokens = compileTokensToObj(raw);
  const compiled = Object.entries(tokens).map(([name, value]) => `  --${prefix}${capitaliseWord(name)}: ${value};\n`).join('')
  return `:root {\n${compiled}}`
}

const compileToSCSS = (raw) => {
  const prefix = `$${raw.group}`;
  const tokens = compileTokensToObj(raw);
  return Object.entries(tokens).map(([name, value]) => `${prefix}${capitaliseWord(name)}: ${value};\n`).join('')
};

const compile = ({
  inputFilePath = null,
  outputFilePath = null,
  targetFormats = [
    'css',
    'scss',
    'javascript',
    'json',
  ],
}) => {
  console.log(inputFilePath, outputFilePath, targetFormats);

  const rawData = fs.readFileSync(inputFilePath, 'utf-8');

  targetFormats.map(format => {
    switch (format) {
      case 'css':
        const output = compileToCSS(rawData);
        fs.writeFileSync(`${outputFilePath}.css`, output, 'utf-8');
      case 'scss':
        const output = compileToSCSS(rawData);
        fs.writeFileSync(`${outputFilePath}.scss`, output, 'utf-8');
      case 'javascript':
        const output = compileToJS(rawData);
        fs.writeFileSync(`${outputFilePath}.js`, output, 'utf-8');
      case 'json':
        const output = compileToJSON(rawData);
        fs.writeFileSync(`${outputFilePath}.json`, output, 'utf-8');
      default:
        break;
    }
  })
}

module.exports = compile;