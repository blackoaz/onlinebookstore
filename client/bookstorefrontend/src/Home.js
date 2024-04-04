import React from 'react';
// import { Link } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Sidebar from './navbar/Sidebar';
import Main from './navbar/Main';

function Home({ addToCart, cartItems }) {
  return (
    <div className='home-sec'>
      <Navbar paths={[{ href: '/', text: 'Home' }]} cartItems={cartItems}/>
      <div><Sidebar /></div>
      <div><Main addToCart={addToCart}/></div>
    </div>
  )
}

export default Home