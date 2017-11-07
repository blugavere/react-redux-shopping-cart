'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reducer = require('../../reducer');

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartButton = function (_Component) {
  _inherits(CartButton, _Component);

  function CartButton() {
    _classCallCheck(this, CartButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CartButton.prototype.render = function render() {
    var _props = this.props,
        styles = _props.styles,
        item = _props.item,
        text = _props.text,
        action = _props.action,
        addToCart = _props.addToCart;

    var button = void 0;
    switch (action) {
      case _constants.CART_ACTION_NAMES.ADD:
        button = _react2.default.createElement(
          _Button2.default,
          { styles: styles, onClick: function onClick() {
              return addToCart(item);
            } },
          text || _constants.DEFAULT_BUTTON_TEXTS[_constants.CART_ACTION_NAMES.ADD]
        );
        break;
      case _constants.CART_ACTION_NAMES.REMOVE:
        button = _react2.default.createElement(
          _Button2.default,
          { styles: styles, onClick: function onClick() {
              return removeFromCart(item);
            } },
          text || _constants.DEFAULT_BUTTON_TEXTS[_constants.CART_ACTION_NAMES.ADD]
        );
        break;
      case _constants.CART_ACTION_NAMES.INC:
        button = _react2.default.createElement(
          _Button2.default,
          { styles: styles, onClick: function onClick() {
              return increaseQty(item);
            } },
          text || _constants.DEFAULT_BUTTON_TEXTS[_constants.CART_ACTION_NAMES.ADD]
        );
        break;
      case _constants.CART_ACTION_NAMES.DEC:
        button = _react2.default.createElement(
          _Button2.default,
          { styles: styles, onClick: function onClick() {
              return decreaseQty(item);
            } },
          text || _constants.DEFAULT_BUTTON_TEXTS[_constants.CART_ACTION_NAMES.ADD]
        );
        break;

      default:
        break;
    }
    return button;
  };

  return CartButton;
}(_react.Component);

CartButton.propTypes = {
  item: _propTypes2.default.object.isRequired,
  styles: _propTypes2.default.string,
  text: _propTypes2.default.string,
  action: _propTypes2.default.string,
  addToCart: _propTypes2.default.func.isRequired,
  removeFromCart: _propTypes2.default.func.isRequired,
  increaseQty: _propTypes2.default.func.isRequired,
  decreaseQty: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = {
  addToCart: _reducer.addToCart
};

// console.log(mapDispatchToProps);

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CartButton);