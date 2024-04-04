import React from 'react';
import Navbar from '../navbar/Navbar';

function Cart({ cartItems, removeFromCart }) {
  
  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };
    return (
    <>
    <Navbar paths={[{ href: '/', text: 'Home' }, { href: '/cart', text: 'Cart' }]} cartItems={cartItems} />
    <div className='container cart-sec'>
      <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
      <div className='table cart-items'>
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Author</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className='cart-img'>
                    <img src={item.image} alt='book' />
                  </div>
                </td>
                <td>{item.name}</td>
                <td><span>{item.author}</span></td>
                <td>KSH. {item.price}</td>
                <td>1</td>
                <td>KSH. {item.price}</td>
                <td><button onClick={handleRemoveItem}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default Cart;
