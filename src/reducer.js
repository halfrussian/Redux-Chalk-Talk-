import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS  } from "./action";

const reducer = (state, action) => {

  //this could be a switch statement with spreading the state
  if(action.type === CLEAR_CART) {
    return {...state, cart: []}
  }
  if(action.type === DECREASE) {
    let tempCart = [];
    if(action.payload.amount === 1){
      tempCart = state.cart.filter(
        cartItem => cartItem.id !== action.payload.id
      );
    }
    else {
       tempCart =  state.cart.map((cartItem) => {
        if(cartItem.id === action.payload.id){
          cartItem = {...cartItem, amount: cartItem.amount - 1}
        }
        return cartItem;
      })
    }
    return {...state, cart:tempCart}
  }
  if(action.type === INCREASE) {
    let tempCart =  state.cart.map((cartItem) => {
      if(cartItem.id === action.payload.id){
        cartItem = {...cartItem, amount: cartItem.amount + 1}
      }
      return cartItem;
    })
    return {
      ...state,
       cart:tempCart }
  }
  if(action.type === REMOVE) {
    return {
      ...state, 
      cart: state.cart.filter(cartItem=> cartItem.id !== action.payload.id)}
  }
  if(action.type === GET_TOTALS) {
    let {total, amount} = state.cart.reduce(
      (cartTotal, cartItem) => {
        const {price, amount} = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;

        cartTotal.total += itemTotal;
      return cartTotal;
    }, 
    {
    total:0,
    amount:0
  }
  )
  total = parseFloat(total.toFixed(2));
  return {...state, total, amount}
  }
    return state;
}

export default reducer