'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reducer = require('../../reducer');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClearCart = function ClearCart(props) {
  var styles = props.styles,
      text = props.text,
      clearCart = props.clearCart;

  return _react2.default.createElement(
    _Button2.default,
    {
      styles: styles,
      className: 'rrshoppingcart--button-clear',
      onClick: function onClick() {
        return clearCart();
      } },
    text || _constants.DEFAULT_BUTTON_TEXTS.CLEAR
  );
};

ClearCart.propTypes = {
  text: _propTypes2.default.string,
  styles: _propTypes2.default.string,
  clearCart: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = {
  clearCart: _reducer.clearCart
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ClearCart);