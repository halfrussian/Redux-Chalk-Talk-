import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTAL  } from "./action";

const reducer = (state, action) => {

  //this could be a switch statement with spreading the state
  if(action.type === CLEAR_CART) {
    return {...state, cart: []}
  }
  if(action.type === DECREASE) {
    return {}
  }
  if(action.type === INCREASE) {
    return {}
  }
  if(action.type === REMOVE) {
    return {}
  }
  if(action.type === GET_TOTAL) {
    return {}
  }
    return state;
}

export default reducer