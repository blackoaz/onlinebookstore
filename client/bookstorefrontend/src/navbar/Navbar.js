import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const paths = props.paths || [];
  const cartItems = props.cartItems || [];

  console.log(cartItems.length)

  return (
    <div className="container main-bar">
      <div>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <Link to={path.href}>{path.text}</Link>
            {index !== paths.length - 1 && ' / '} {/* Add separator between links */}
          </React.Fragment>
        ))}
      </div>

      <div className='shopping-cart'>
        <span>{cartItems.length}</span>
        <Link to={'/cart'}>
          <FontAwesomeIcon icon={faCartShopping} className="font-icon"/>
        </Link>
      </div>
    </div>
  );
}
