import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './navbar/Sidebar';
import Main from './navbar/Main';

function Home({ addToCart, cartItems }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='home-sec'>
      <Navbar paths={[{ href: '/', text: 'Home' }]} cartItems={cartItems}/>
      <div><Sidebar onSelectCategory={handleSelectCategory} /></div>
      <div><Main addToCart={addToCart} selectedCategory={selectedCategory} /></div>
    </div>
  );
}

export default Home;
