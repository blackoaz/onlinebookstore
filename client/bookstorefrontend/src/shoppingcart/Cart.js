import React from 'react'

function Cart() {
  return (
    <div className='container cart-sec'>

      <div>
        <h2 style={{ textAlign: 'center' }}>Shopping Cart</h2>
        <hr />
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
            <tr>
              <td>
                <div className='cart-img'>
                  <img src='https://via.placeholder.com/150' alt='book' />
                </div>
              </td>
              <td>Book Title</td>
              <td><span>Author</span></td>
              <td>KSH. 200</td>
              <td>1</td>
              <td>KSH. 200</td>
              <td><button>Remove</button></td>
            </tr>
            <tr>
              <td>
                <div className='cart-img'>
                  <img src='https://via.placeholder.com/150' alt='book' />
                </div>
              </td>
              <td>Book Title</td>
              <td><span>Author</span></td>
              <td>KSH. 200</td>
              <td>1</td>
              <td>KSH. 200</td>
              <td><button>Remove</button></td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Cart