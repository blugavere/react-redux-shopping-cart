# react-redux-shopping-cart

Shopping cart components for React-Redux applications

### Installation

>npm install react-redux-shopping-cart

Or

>yarn add react-redux-shopping-cart

### Usage

##### 1. Addding the reducer to redux store


```
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
| AddToCart | __item__(Object), __styles__(String), __disabled__(Boolean), __text__(String)| Adds the given item to shopping cart|
| RemoveFromCart | __item__(Object), __styles__(String), __disabled__(Boolean), __text__(String)| Removes the given item from shopping cart|
|IncreaseQty| __itemId__(String), __styles__(String), __disabled__(Boolean), __text__(String) | Increases the selected item's quantity |
|DecreaseQty| __itemId__(String), __styles__(String), __disabled__(Boolean), __text__(String) | Decreases the selected item's quantity |
|ClearCart| __styles__(String), __disabled__(Boolean), __text__(String) | Clears the cart |

#### 3. Styling

##### a. Styled Components  
All built-in components are extends styled-compoenent, so its possible to pass style string as a __prop__

##### b. Global Css

| Component | Class name(s) |
|-----------|------------|
| AddToCart | __rrshoppingcart--button-add__|
| RemoveFromCart | __rrshoppingcart--button-remove__|
| IncreaseQty | __.rrshoppingcart--button-qty__,  __.rrshoppingcart--button-inc__|
| DecreaseQty | __.rrshoppingcart--button-qty__,  __.rrshoppingcart--button-dec__|
| ClearCart | __rrshoppingcart--button-clear__|
