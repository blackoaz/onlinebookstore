import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar({ path }) {
  console.log('Path:', path); // Add this line for debugging
  return (
    <div className="container main-bar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className='shopping-cart'>
        <span>1</span>
        <Link to={'/cart'}>
          <FontAwesomeIcon icon={faCartShopping} className="font-icon"/>
        </Link>
      </div>
    </div>
  );
}
