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

var IncreaseQty = function IncreaseQty(props) {
  var styles = props.styles,
      text = props.text,
      itemId = props.itemId,
      increaseQty = props.increaseQty;

  return _react2.default.createElement(
    _Button2.default,
    {
      styles: styles,
      className: 'rrshoppingcart--button-qty rrshoppingcart--button-inc',
      onClick: function onClick() {
        return increaseQty(itemId);
      } },
    text || _constants.DEFAULT_BUTTON_TEXTS.INC
  );
};

IncreaseQty.propTypes = {
  itemId: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string,
  styles: _propTypes2.default.string,
  increaseQty: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = {
  increaseQty: _reducer.increaseQty
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(IncreaseQty);