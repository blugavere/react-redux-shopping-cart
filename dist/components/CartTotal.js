'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CartTotal = function CartTotal(props) {
  var total = props.total,
      currency = props.currency;

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'span',
      { className: 'rrshoppingcart-grandtotal-amount' },
      total
    ),
    _react2.default.createElement(
      'span',
      { className: 'rrshoppingcart-grandtotal-currency' },
      currency
    )
  );
};

CartTotal.defaultProps = {
  total: 0,
  currency: '$'
};

CartTotal.propTypes = {
  total: _propTypes2.default.number.isRequired,
  currency: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    total: store.cart.total
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(CartTotal);