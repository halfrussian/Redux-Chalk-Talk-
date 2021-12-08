import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import {createStore} from 'redux';
import reducer from "./reducer";
import {Provider} from 'react-redux';



//initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5,
};


//reducer


const store =  createStore(reducer, initialStore)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
