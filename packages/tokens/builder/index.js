const fs = require("fs");

const tokenReducer = (acc, cur) => {
  acc[cur.name] = cur.value;
  if (cur.aliases) {
    cur.aliases.map(alias => acc[alias] = cur.value)
  }
  return acc;
}

const initialTransform = (tokenGroup) => tokenGroup.tokens.reduce(tokenReducer, {})

const toJS = (prefix, inputTokens) => {
  const jsReducer = (acc, [name, value]) => {
    acc[`${prefix}${name}`] = value;
    return acc;
  }
  return {
    [prefix]: Object.entries(inputTokens).reduce(jsReducer, {})
  }
}

const toCSS = (prefix, inputTokens) => {
  const transformed = Object.entries(inputTokens).map(([name, value]) => `  --${prefix}-${name}: ${value};\n`);
  return `:root {\n${transformed.join('')}}`
}

const compile = () => {
  const tokens = initialTransform(raw);
  const prefixes = [raw.group, ...raw.aliases]
  const js = prefixes.map(prefix => toJS(prefix, tokens))
  const css = prefixes.map(prefix => toCSS(prefix, tokens))

  fs.writeFileSync('css.css', css[0]);
}