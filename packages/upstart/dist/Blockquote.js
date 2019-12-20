'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var styled = _interopDefault(require('styled-components'));

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
var StyledQuote = styled.blockquote(_templateObject(), function (_ref) {
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

exports.Blockquote = Blockquote;
exports.default = Blockquote;
