import React from 'react';
// import { Link } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Sidebar from './navbar/Sidebar';
import Main from './navbar/Main';

function Home() {
  return (
    <div className='home-sec'>
      <Navbar paths={[{ href: '/', text: 'Home' }]}/>
      <div><Sidebar /></div>
      <div><Main /></div>
    </div>
  )
}

export default Home