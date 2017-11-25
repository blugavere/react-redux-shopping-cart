# react-redux-shopping-cart

Shopping cart components for React-Redux applications. 

This package aims to provide fundemental and easily extendable components instead of complexity and hardly rememberable strict rules.

### Installation

>npm install react-redux-shopping-cart

Or

>yarn add react-redux-shopping-cart

### Usage

##### 1. Addding the reducer to redux store


```js
  import { createStore } from 'redux';
  import { cartReducer } from 'react-redux-shopping-cart';

  const rootReducer = () =>
    combineReducers({
      //other reducers
      cart: cartReducer,
    });

  const store = createStore(
    rootReducer(),
    //middleware and enchancer composition
    ,
  );
```

#### 2. Built-in components

| Component | Parameters| Description |
|-----------|-----------|-------------|
| `AddToCart` | __item__(Object), __styles__(String), __disabled__(Boolean), __text__(String)| Adds the given item to shopping cart|
| `RemoveFromCart` | __item__(Object), __styles__(String), __disabled__(Boolean), __text__(String)| Removes the given item from shopping cart|
|`IncreaseQty`| __itemId__(String), __styles__(String), __disabled__(Boolean), __text__(String) | Increases the selected item's quantity |
|`DecreaseQty`| __itemId__(String), __styles__(String), __disabled__(Boolean), __text__(String) | Decreases the selected item's quantity |
|`ClearCart`| __styles__(String), __disabled__(Boolean), __text__(String) | Clears the cart |

#### 3. Styling

##### a. Styled Components  
All built-in components are extends styled-compoenent, so its possible to pass style string as a __prop__

__For example__

```js
const styles =`
  background-color: 'transparent';
  min-width: '100px';
  border:1px solid;
`;

//...

<AddToCart styles={styles} item={item}/>

//...
```

##### b. Global Css

| Component | Class name(s) |
|-----------|------------|
| `AddToCart` | __.rrshoppingcart--button-add__|
| `RemoveFromCart` | __.rrshoppingcart--button-remove__|
| `IncreaseQty` | __.rrshoppingcart--button-qty__,  __.rrshoppingcart--button-inc__|
| `DecreaseQty` | __.rrshoppingcart--button-qty__,  __.rrshoppingcart--button-dec__|
| `ClearCart` | __.rrshoppingcart--button-clear__|


#### Programmatic API

A programmatic API can be exposed by retrieving a service and passing in the redux store.

```js

import { createCart } from 'react-redux-shopping-cart';

const cart = createCart(store);

const item = {
  id: 'foo',
  price: 1,
  qty: 1
};

cart.setCart({items: [item]});

```



### Issues

If you find a bug, please file an issue on [issue tracker on GitHub](https://github.com/enesTufekci/react-redux-shopping-cart/issues).

### Contribution

All kind of contributions would be greatly appreciated. The topics are need to be covered;

1. __Tests__
2. __Flow integration__
3. __Example__