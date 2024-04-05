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
      <div className='main-bar-title'>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <Link to={path.href} className='link-text'>{path.text}</Link>
            {index !== paths.length - 1 && ' / '}
          </React.Fragment>
        ))}
      </div>

      <div className='shopping-cart'>
        <span>{cartItems.length}</span>
        <Link to={'/cart'} className='cart-icon'>
          <FontAwesomeIcon icon={faCartShopping} className="font-icon"/>
        </Link>
      </div>
    </div>
  );
}
