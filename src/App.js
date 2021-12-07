import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import {createStore} from 'redux';


//initial store
const initialStore = {
  count: 0
}

//reducer
const reducer = (state, action) => {
  console.log({state, action});

  if(action.type === 'DECREASE') {
    return {count: state.count - 1}
  } else if(action.type === 'INCREASE') {
    return {count: state.count + 1}
  } else if (action.type === 'RESET') {
    return {count: 0}
  } else {
    return state;
  }
}



const store =  createStore(reducer, initialStore)
store.dispatch({type: 'DECREASE'})
store.dispatch({type: 'INCREASE'})
store.dispatch({type: 'RESET'})
console.log(store.getState())

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
