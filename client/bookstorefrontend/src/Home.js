import React from 'react';

import Navbar from './navbar/Navbar';
import Sidebar from './navbar/Sidebar';
import Main from './navbar/Main';

function Home() {
  return (
    <div className='home-sec'>
      <div><Navbar /></div>
      <div><Sidebar /></div>
      <div><Main /></div>
    </div>
  )
}

export default Home