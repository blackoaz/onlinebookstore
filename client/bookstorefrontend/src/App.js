import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import LoginPage from './auth/LoginPage'
import Home from './Home';
import BookDetail from './bookdetails/Book';
import Shoppingcart from './shoppingcart/Cart'




function App() {
  const isloggedIn = true;
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item){
    setCartItems([...cartItems, item]);

  }

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
    
  return (
    <>
    {/* <h1 className="main-head">ONLINE BOOK STORE</h1> */}
      <Routes>
        {!isloggedIn ? (
          <Route path="/" element={<LoginPage />} />
        ) : (
          <>
          <Route path="/" element={<Home addToCart={addToCart} cartItems={cartItems}/>} />
          <Route path="/specificbook/:bookId" element={<BookDetail />} />
          <Route path="/cart" element={<Shoppingcart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
