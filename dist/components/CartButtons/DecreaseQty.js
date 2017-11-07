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

var DecreaseQty = function DecreaseQty(props) {
  var styles = props.styles,
      text = props.text,
      itemId = props.itemId,
      decreaseQty = props.decreaseQty;

  return _react2.default.createElement(
    _Button2.default,
    {
      styles: styles,
      className: 'rrshoppingcart--button-qty rrshoppingcart--button-dec',
      onClick: function onClick() {
        return decreaseQty(itemId);
      } },
    text || _constants.DEFAULT_BUTTON_TEXTS.DEC
  );
};

DecreaseQty.propTypes = {
  itemId: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string,
  styles: _propTypes2.default.string,
  decreaseQty: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = {
  decreaseQty: _reducer.decreaseQty
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(DecreaseQty);