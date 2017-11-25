import { only, except } from './utils';
import * as actions from './actionTypes';

export const setCart = payload => ({
  type: actions.SET_CART,
  payload,
});

export function addToCart(item) {
  return {
    type: actions.ADD_TO_CART,
    payload: { ...item, addedAt: new Date(), qty: 1},
  }
}

export function removeFromCart(item) {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: item,
  }
}

export function increaseQty(itemId) {
  return {
    type: actions.INCREASE_QTY,
    payload: itemId,
  }
}

export function decreaseQty(itemId) {
  return {
    type: actions.DECREASE_QTY,
    payload: itemId,
  }
}

export function clearCart() {
  return {
    type: actions.CLEAR_CART,
  }
}

function update(state) {
  let total = 0;
  state.items.map((item) => {
    item.subTotal = item.price * item.qty;
    total = total + item.subTotal;
    return item;
  });

  return { ...state, total };
}

const initialState = {
  items: [],
  total: 0,
};

export const createCart = ({dispatch}) => ({
  setCart: state => {
    dispatch(setCart(state));
  }
})

const ACTION_HANDLERS = {
  [actions.SET_CART]: (state, action) => update({ ...state, ...action.payload }),
  [actions.ADD_TO_CART]: (state, action) => {
    const newItem = action.payload;
    const alreadyAdded = only(newItem, state.items);
    
    if (alreadyAdded) {
      return state;
    }

    return update({ ...state, items: [...state.items, newItem] });
  },
  [actions.REMOVE_FROM_CART]: (state, action) => {
    return update({ ...state, items: except(action.payload, state.items)});
  },
  [actions.INCREASE_QTY]: (state, action) => {
    const items = state.items.map(item => {
      if(item.id === action.payload) {
        item.qty++;
      }
      return item;
    });
    
    return update({ ...state, items });
  },
  [actions.DECREASE_QTY]: (state, action) => {
    const items = state.items.map(item => {
      if(item.id === action.payload) {
        item.qty--;
      }
      return item;
    }).filter(item => item.qty !== 0);
    
    return update({ ...state, items });
  },
  [actions.CLEAR_CART]: () => initialState,
};

const cartReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) :state;
};

export default cartReducer;

