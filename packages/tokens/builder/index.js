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
  // TODO: Include the group aliases, too
  const tokens = JSON.stringify(compileTokensToObj(raw), null, 2);
  return `export const ${raw.group} = ${tokens}`
};

const compileToJSON = (raw) => {
  // TODO: Include the group aliases, too
  return JSON.stringify(compileTokensToObj(raw));
};

const compileToCSS = (raw) => {
  // TODO: Include the group aliases, too
  const prefix = raw.group;
  const tokens = compileTokensToObj(raw);
  const compiled = Object.entries(tokens).map(([name, value]) => `  --${prefix}${capitaliseWord(name)}: ${value};\n`).join('')
  return `:root {\n${compiled}}`
}

const compileToSCSS = (raw) => {
  // TODO: Include the group aliases, too
  const prefix = `$${raw.group}`;
  const tokens = compileTokensToObj(raw);
  return Object.entries(tokens).map(([name, value]) => `${prefix}${capitaliseWord(name)}: ${value};\n`).join('')
};

const compile = (
  inputFilePath = null,
  outputFilePath = null,
  targetFormats = [
    'css',
    'scss',
    'javascript',
    'json',
  ]
) => {
  const rawData = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));

  targetFormats.map(format => {
    switch (format) {
      case 'css':
        const outputCSS = compileToCSS(rawData);
        fs.writeFileSync(`${outputFilePath}.css`, outputCSS, 'utf-8');
        break;
      case 'scss':
        const outputSCSS = compileToSCSS(rawData);
        fs.writeFileSync(`${outputFilePath}.scss`, outputSCSS, 'utf-8');
        break;
      case 'javascript':
        const outputJS = compileToJS(rawData);
        fs.writeFileSync(`${outputFilePath}.js`, outputJS, 'utf-8');
        break;
      case 'json':
        const outputJSON = compileToJSON(rawData);
        fs.writeFileSync(`${outputFilePath}.json`, outputJSON, 'utf-8');
        break;
      default:
        break;
    }
  })
}

module.exports = compile;