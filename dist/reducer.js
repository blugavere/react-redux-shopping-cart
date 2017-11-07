'use strict';

exports.__esModule = true;

var _ACTION_HANDLERS;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addToCart = addToCart;
exports.removeFromCart = removeFromCart;
exports.increaseQty = increaseQty;
exports.decreaseQty = decreaseQty;
exports.clearCart = clearCart;

var _utils = require('./utils');

var _actionTypes = require('./actionTypes');

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addToCart(item) {
  return {
    type: actions.ADD_TO_CART,
    payload: _extends({}, item, { addedAt: new Date(), qty: 1 })
  };
}

function removeFromCart(item) {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: item
  };
}

function increaseQty(itemId) {
  return {
    type: actions.INCREASE_QTY,
    payload: itemId
  };
}

function decreaseQty(itemId) {
  return {
    type: actions.DECREASE_QTY,
    payload: itemId
  };
}

function clearCart() {
  return {
    type: actions.CLEAR_CART
  };
}

function update(state) {
  var total = 0;
  state.items.map(function (item) {
    item.subTotal = item.price * item.qty;
    total = total + item.subTotal;
    return item;
  });

  return _extends({}, state, { total: total });
}

var initialState = {
  items: [],
  total: 0
};

var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, _ACTION_HANDLERS[actions.ADD_TO_CART] = function (state, action) {
  var newItem = action.payload;
  var alreadyAdded = (0, _utils.only)(newItem, state.items);

  if (alreadyAdded) {
    return state;
  }

  return update(_extends({}, state, { items: [].concat(state.items, [newItem]) }));
}, _ACTION_HANDLERS[actions.REMOVE_FROM_CART] = function (state, action) {
  return update(_extends({}, state, { items: (0, _utils.except)(action.payload, state.items) }));
}, _ACTION_HANDLERS[actions.INCREASE_QTY] = function (state, action) {
  var items = state.items.map(function (item) {
    if (item.id === action.payload) {
      item.qty++;
    }
    return item;
  });

  return update(_extends({}, state, { items: items }));
}, _ACTION_HANDLERS[actions.DECREASE_QTY] = function (state, action) {
  var items = state.items.map(function (item) {
    if (item.id === action.payload) {
      item.qty--;
    }
    return item;
  }).filter(function (item) {
    return item.qty !== 0;
  });

  return update(_extends({}, state, { items: items }));
}, _ACTION_HANDLERS[actions.CLEAR_CART] = function () {
  return initialState;
}, _ACTION_HANDLERS);

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

exports.default = cartReducer;