import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Main() {

  const [books, setBooks] = useState([]);

  const addingtoCart = ()=>{
    console.log("Item added to cart")
  } 
  return (
    <div className='main-sec'>
      <h1 className="main-head">ONLINE BOOK STORE</h1>
      <div className='main-heading'>
        <h2>ALL PRODUCTS</h2>
        <hr />
      </div>

      <div className='container text-center books-sec'>
        <div className='row books'>
          <div className='col'>
            <Link to="/specificbook" className='link-to'>
              <div>
                <img src='../images/book1.jpeg' alt='attic-blank' />
              </div>
              <div>
                <span></span>
              </div>
              <span className='book-title'>A Light in the Attic</span>
              <div>
                <span className='price'>KSH. 1000</span>
              </div>
              </Link>
              <div className='add-cart'>
                <button onClick={addingtoCart}>ADD TO CART</button>
              </div>
            
          </div>


          <div className='col'>
            <div>
              <img src='../images/book2.jpeg' alt='second-blank' />
            </div>
            <div>
              <span></span>
            </div>
            <span className='book-title'>A Light in the Attic</span>
            <div>
              <span className='price'>KSH. 1000</span>
            </div>
            <div className='add-cart'>
              <button>ADD TO CART</button>
            </div>
          </div>

          <div className='col'>
            <div>
              <img src='../images/book2.jpeg' alt='second-blank' />
            </div>
            <div>
              <span></span>
            </div>
            <span className='book-title'>A Light in the Attic</span>
            <div>
              <span className='price'>KSH. 1000</span>
            </div>
            <div className='add-cart'>
              <button>ADD TO CART</button>
            </div>
          </div>

          <div className='col'>
            <div>
              <img src='../images/book3.jpeg' alt='second-blank' />
            </div>
            <div>
              <div>
                <span></span>
              </div>
              <span className='book-title'>A Light in the Attic</span>
              <div>
                <span className='price'>KSH. 1000</span>
              </div>
              <div className='add-cart'>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
