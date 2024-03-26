import React from 'react';

import Navbar from './navbar/Navbar';
import Sidebar from './navbar/Sidebar';
import Main from './navbar/Main';

function Home() {
  return (
    <div>
    <Navbar />
    <Sidebar />
    <Main />
    </div>
  )
}

export default Home