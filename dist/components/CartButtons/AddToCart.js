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

var AddToCart = function AddToCart(props) {
  var styles = props.styles,
      text = props.text,
      item = props.item,
      disabled = props.disabled,
      addToCart = props.addToCart;

  return _react2.default.createElement(
    _Button2.default,
    {
      styles: styles,
      disabled: disabled,
      className: 'rrshoppingcart--button-add',
      onClick: function onClick() {
        return addToCart(item);
      } },
    text
  );
};

AddToCart.defaultProps = {
  item: {},
  text: _constants.DEFAULT_BUTTON_TEXTS.ADD,
  styles: '',
  disabled: false
};

AddToCart.propTypes = {
  item: _propTypes2.default.object.isRequired,
  text: _propTypes2.default.string,
  styles: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  addToCart: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = {
  addToCart: _reducer.addToCart
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(AddToCart);