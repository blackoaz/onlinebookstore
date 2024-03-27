import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    
      <div className="container main-bar">
        <div><a href='google.com'>Home</a></div>
        <div className='shopping-cart'>
          <span>1</span>
          <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="font-icon"/>
          </Link>
          </div>
      </div>
  )
}
