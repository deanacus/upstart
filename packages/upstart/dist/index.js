'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-left: 3px solid #ccc;\n  margin-left: ", ";\n  margin-right: ", ";\n  padding: ", ";\n\n  > p {\n    font-size: 18px;\n    margin: 0;\n  }\n\n  cite {\n    display: block;\n    text-align: right;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledQuote = styled__default.blockquote(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.space.sm;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.sm;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.sm;
});
var Blockquote = function Blockquote(_ref4) {
  var children = _ref4.children,
      cite = _ref4.cite;
  return React.createElement(StyledQuote, null, children, cite && React.createElement("cite", null, "\u2014 ", cite));
};
Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
  cite: PropTypes.string
};
Blockquote.defaultProps = {
  cite: ''
};

var space = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 54,
  xxxxl: 62
};
var fonts = {
  serif: '',
  sans: 'Lato, system-ui, sans-serif',
  monospace: 'Menlo, monospace',
  body: '',
  heading: 'inherit'
};
var fontWeights = {
  body: 400,
  heading: 700,
  bold: 700
};
var fontSizes = {
  body: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  },
  heading: {
    xs: 32,
    sm: 48,
    md: 64,
    lg: 96,
    xl: 144
  }
};
var lineHeights = {
  body: 1.5,
  heading: 1.125
};
var colors = {
  black: '#191919',
  white: '#fcfcfc',
  grey: {
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626'
  },
  primary: {
    200: '#bce8f6',
    300: '#8fd9f0',
    400: '#62caea',
    500: '#35bbe3',
    600: '#1ca1ca',
    700: '#157e9d',
    800: '#0f5a70'
  },
  secondary: {
    200: '#cae7d3',
    300: '#a7d7b5',
    400: '#84c798',
    500: '#61b87a',
    600: '#479e60',
    700: '#387b4b',
    800: '#285836'
  },
  success: '',
  info: '',
  warning: '',
  danger: ''
};
var radii = {
  sm: 3,
  md: 5,
  lg: 7
};
var breakpoints = {
  xxs: 320,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
  xxl: 1680,
  xxxl: 1920
};
var widths = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1440,
  xxxl: 1680
};
var theme = {
  space: space,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  lineHeights: lineHeights,
  colors: colors,
  breakpoints: breakpoints,
  radii: radii,
  widths: widths
};

var UpstartTheme = function UpstartTheme(_ref) {
  var children = _ref.children;
  return React.createElement(styled.ThemeProvider, {
    theme: theme
  }, children);
};

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  text-decoration: none;\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background: transparent;\n    border: .1rem solid ", ";\n    color: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  border-radius: ", "rem;\n  box-sizing: border-box;\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  font-family: ", ";\n  font-size: ", "rem;\n  line-height: ", ";\n  padding: ", ";\n\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var baseStyles = styled.css(_templateObject$1(), function (_ref) {
  var theme = _ref.theme;
  return theme.radii.s / 10;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fonts.sans;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontSizes.body.s / 10;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.lineHeights.body;
}, function (_ref6) {
  var theme = _ref6.theme;
  return "".concat(theme.space.xs / 10, "rem ").concat(theme.space.s / 10, "rem");
});
var primary = {
  fill: styled.css(_templateObject2(), function (_ref7) {
    var theme = _ref7.theme;
    return theme.colors.primary[500];
  }),
  ghost: styled.css(_templateObject3(), function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.primary[500];
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.colors.primary[500];
  })
};
var primaryStyles = styled.css(_templateObject4(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.primary[500];
});
var secondaryStyles = styled.css(_templateObject5(), function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.secondary[500];
});
var StyledLink = styled__default.a(_templateObject6(), baseStyles, function (_ref12) {
  var variant = _ref12.variant;
  return variant === 'primary' && primaryStyles;
}, function (_ref13) {
  var variant = _ref13.variant;
  return variant === 'secondary' && secondaryStyles;
});
var StyledButton = styled__default.button(_templateObject7(), baseStyles, function (_ref14) {
  var variant = _ref14.variant,
      ghost = _ref14.ghost;
  return variant === 'primary' && !ghost && primary.fill;
}, function (_ref15) {
  var variant = _ref15.variant,
      ghost = _ref15.ghost;
  return variant === 'primary' && ghost && primary.ghost;
}, function (_ref16) {
  var variant = _ref16.variant,
      ghost = _ref16.ghost;
  return variant === 'secondary' && secondaryStyles;
});
var Button = function Button(_ref17) {
  var children = _ref17.children,
      type = _ref17.type,
      variant = _ref17.variant,
      href = _ref17.href,
      rest = _objectWithoutProperties(_ref17, ["children", "type", "variant", "href"]);

  return React.createElement(UpstartTheme, null, href ? React.createElement(StyledLink, _extends({
    href: href,
    variant: variant
  }, rest), children) : React.createElement(StyledButton, _extends({
    variant: variant,
    type: type
  }, rest), children));
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary'])
};
Button.defaultProps = {
  href: null,
  type: 'button',
  variant: 'primary'
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n\n  /* RESET... OF SORTS */\n  html {\n    font-size: 10px;\n  }\n\n  body {\n    margin: 0;\n    min-height: 100%;\n    padding: 0;\n  }\n\n  *, * + * {\n    box-sizing: border-box;\n  }\n\n  /* GLOBAL TYPOGRAPHY */\n\n\n  /* TODO: Get these values off a theme */\n  body {\n    color: #333;\n    font-family: ", ";\n    font-size: ", "rem;\n  }\n\n  h1 {\n    font-size: 9.6rem;\n    margin-top: 0;\n  }\n\n  h2 {\n    font-size: 6.0rem;\n    margin-top: 0;\n  }\n\n  h3 {\n    font-size: 4.8rem;\n    margin-top: 0;\n  }\n\n  h4 {\n    font-size: 3.4rem;\n    margin-top: 0;\n  }\n\n  h5 {\n    font-size: 2.4rem;\n    margin-top: 0;\n  }\n\n  h6 {\n    font-size: 2.0rem;\n    margin-top: 0;\n  }\n\n  p {\n    margin-top: 0;\n  }\n\n  strong,\n  b {\n    font-weight: bold;\n  }\n\n  em,\n  i {\n    font-style: italic;\n  }\n\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyleCSS = styled.css(_templateObject$2(), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.sans;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.body.md / 10;
});
var GlobalStyles = styled.createGlobalStyle(_templateObject2$1(), GlobalStyleCSS);
var Upstart = function Upstart(_ref3) {
  var children = _ref3.children;
  return React.createElement(UpstartTheme, null, React.createElement(GlobalStyles, null), children);
};

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    justify-content: ", ";\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    align-items: ", ";\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: ", "rem;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    flex-basis: ", ";\n    max-width: ", ";\n    width: ", ";\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["flex-direction: column-reverse;"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  align-content: stretch;\n  align-items: stretch;\n  box-sizing: border-box;\n  display: flex;\n  flex-basis: 100%;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 100%;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    justify-content: ", ";\n  "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    padding: ", "rem;\n  "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["flex-direction: row-reverse;"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  align-items: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: ", ";\n  justify-content: start;\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer = styled__default.div(_templateObject$3(), function (_ref) {
  var fixed = _ref.fixed,
      size = _ref.size,
      theme = _ref.theme;

  if (fixed) {
    return size ? "max-width: ".concat(theme.widths[size] / 10, "rem") : "max-width: 1200px";
  }
});
var StyledRow = styled__default.div(_templateObject2$2(), function (props) {
  return props.alignment;
}, function (_ref2) {
  var wrap = _ref2.wrap;
  return wrap ? 'wrap' : 'no-wrap';
}, function (props) {
  return props.reverse && styled.css(_templateObject3$1());
}, function (props) {
  return props.padding && styled.css(_templateObject4$1(), function (_ref3) {
    var theme = _ref3.theme;
    return theme.space[props.padding] / 10;
  });
}, function (props) {
  return props.justifyContent && styled.css(_templateObject5$1(), props.justifyContent);
});
var StyledColumn = styled__default.div(_templateObject6$1(), function (props) {
  return props.reverse && styled.css(_templateObject7$1());
}, function (props) {
  return props.flexBasis && styled.css(_templateObject8(), props.flexBasis, props.flexBasis, props.flexBasis);
}, function (props) {
  return props.padding && styled.css(_templateObject9(), function (_ref4) {
    var theme = _ref4.theme;
    return theme.space[props.padding] / 10;
  });
}, function (props) {
  return props.alignItems && styled.css(_templateObject10(), props.alignItems);
}, function (props) {
  return props.justifyContent && styled.css(_templateObject11(), props.justifyContent);
});
var justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  left: 'left',
  right: 'right'
};
var alignmentMap = {
  stretch: 'stretch',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline'
};
var Container = function Container(_ref5) {
  var fixed = _ref5.fixed,
      _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? null : _ref5$size,
      children = _ref5.children;
  return React.createElement(StyledContainer, {
    fixed: fixed,
    size: size
  }, children);
};
var Row = function Row(_ref6) {
  var reverse = _ref6.reverse,
      align = _ref6.align,
      justify = _ref6.justify,
      padding = _ref6.padding,
      children = _ref6.children,
      wrap = _ref6.wrap;
  var alignItems = align ? alignmentMap[align] : false;
  var justifyContent = justify ? justifyMap[justify] : false;
  return React.createElement(StyledRow, {
    alignItems: alignItems,
    justifyContent: justifyContent,
    padding: padding,
    reverse: reverse,
    wrap: wrap
  }, children);
};
Row.propTypes = {
  align: PropTypes.oneOf(['stretch', 'start', 'end', 'center', 'baseline']),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly', 'left', 'right']),
  padding: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxl']),
  reverse: PropTypes.bool,
  wrap: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
Row.defaultProps = {
  wrap: false,
  reverse: false
};
var Column = function Column(_ref7) {
  var cols = _ref7.cols,
      reverse = _ref7.reverse,
      align = _ref7.align,
      justify = _ref7.justify,
      padding = _ref7.padding,
      children = _ref7.children;
  var flexBasis = cols / 12 * 100 + '%';
  var alignItems = align ? alignmentMap[align] : false;
  var justifyContent = justify ? justifyMap[justify] : false;
  return React.createElement(StyledColumn, {
    flexBasis: flexBasis,
    alignItems: alignItems,
    justifyContent: justifyContent,
    padding: padding,
    reverse: reverse
  }, children);
};
var Grid = {
  Container: Container,
  Row: Row,
  Column: Column
};

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      title = _ref.title;
  return React.createElement("img", {
    src: src,
    alt: alt,
    title: title
  });
};
var ImageProps = {
  /** The source path of the image */
  src: PropTypes.string.isRequired,

  /** The alternative text for the image */
  alt: PropTypes.string.isRequired,

  /** An optional title for the image */
  title: PropTypes.string
};
Image.propTypes = _objectSpread2({}, ImageProps);

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    padding: .4rem 1.6rem;\n    background: green;\n    color: white;\n    border-radius: .4rem;\n    text-decoration: none;\n  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLink$1 = styled__default.a(_templateObject$4(), function (props) {
  return props.type === 'button' && styled.css(_templateObject2$3());
});
var Link = function Link(_ref) {
  var children = _ref.children,
      to = _ref.to,
      href = _ref.href,
      target = _ref.target,
      type = _ref.type,
      external = _ref.external;
  return React.createElement(StyledLink$1, {
    href: to || href,
    target: target,
    type: type
  }, children);
};

var ListItem = function ListItem(_ref) {
  var children = _ref.children;
  return React.createElement("li", null, children);
};
var UnorderedList = function UnorderedList(_ref2) {
  var children = _ref2.children;
  return React.createElement("ul", null, children);
};
var OrderedList = function OrderedList(_ref3) {
  var children = _ref3.children;
  return React.createElement("ol", null, children);
};
var List = function List(_ref4) {
  var children = _ref4.children,
      ordered = _ref4.ordered,
      type = _ref4.type;
  var isOrdered = ordered || type === 'ordered' || type === 'ol';
  return isOrdered ? React.createElement(OrderedList, null, children) : React.createElement(UnorderedList, null, children);
};

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  border-bottom: 1px solid #ccc;\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  text-align: left;\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  border-bottom: 1px solid #ccc;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  border-collapse: collapse;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTable = styled__default.table(_templateObject$5());
var StyledTCell = styled__default.td(_templateObject2$4());
var StyledTHead = styled__default.thead(_templateObject3$2());
var StyledTHeadCell = styled__default.th(_templateObject4$2());
var StyledTRow = styled__default.tr(_templateObject5$2());
var TR = function TR(_ref) {
  var children = _ref.children;
  return React.createElement(StyledTRow, null, children);
};
var TD = function TD(_ref2) {
  var children = _ref2.children;
  return React.createElement(StyledTCell, null, children);
};
var THead = function THead(_ref3) {
  var children = _ref3.children;
  return React.createElement(StyledTHead, null, React.createElement("tr", null, children));
};
var TH = function TH(_ref4) {
  var children = _ref4.children;
  return React.createElement(StyledTHeadCell, null, children);
};
var Table = function Table(_ref5) {
  var children = _ref5.children;
  return React.createElement(StyledTable, null, children);
};

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    border: .1rem solid ", ";\n  "]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    border: .1rem solid ", ";\n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";}\n  "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  padding: ", "rem;\n\n  ", "\n\n  ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Card = styled__default.div(_templateObject$6(), function (_ref) {
  var theme = _ref.theme;
  return theme.space.md / 10;
}, function (_ref2) {
  var darkMode = _ref2.darkMode,
      theme = _ref2.theme;
  return darkMode && styled.css(_templateObject2$5(), theme.colors.grey[700], theme.colors.grey[200]);
}, function (_ref3) {
  var border = _ref3.border,
      theme = _ref3.theme,
      darkMode = _ref3.darkMode;
  return border && (darkMode ? styled.css(_templateObject3$3(), theme.colors.grey[200]) : styled.css(_templateObject4$3(), theme.colors.grey[700]));
});

exports.Blockquote = Blockquote;
exports.Button = Button;
exports.Card = Card;
exports.Column = Column;
exports.Container = Container;
exports.Grid = Grid;
exports.Image = Image;
exports.Link = Link;
exports.List = List;
exports.ListItem = ListItem;
exports.OrderedList = OrderedList;
exports.Row = Row;
exports.TD = TD;
exports.TH = TH;
exports.THead = THead;
exports.TR = TR;
exports.Table = Table;
exports.UnorderedList = UnorderedList;
exports.Upstart = Upstart;
exports.UpstartTheme = UpstartTheme;
exports.theme = theme;
