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

var RemoveFromCart = function RemoveFromCart(props) {
  var styles = props.styles,
      text = props.text,
      item = props.item,
      disabled = props.disabled,
      removeFromCart = props.removeFromCart;

  return _react2.default.createElement(
    _Button2.default,
    {
      styles: styles,
      disabled: disabled,
      className: 'rrshoppingcart--button-remove',
      onClick: function onClick() {
        return removeFromCart(item);
      } },
    text
  );
};

RemoveFromCart.defaultProps = {
  item: {},
  text: _constants.DEFAULT_BUTTON_TEXTS.REMOVE,
  styles: '',
  disabled: false
};

RemoveFromCart.propTypes = {
  item: _propTypes2.default.object.isRequired,
  text: _propTypes2.default.string,
  styles: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  removeFromCart: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = {
  removeFromCart: _reducer.removeFromCart
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(RemoveFromCart);