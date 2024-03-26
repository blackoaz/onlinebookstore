import React from 'react'
import Navbar from '../navbar/Navbar';

function Book() {
  return (
    <>
      <div className='container book-detail-sec'>
        <Navbar />
        <div className='book-bio'>
          <img src='../images/book1.jpeg' alt='book' />
          <div className='book-metadata'>
            <h3>A Light in the Attic</h3>
            <div className='book-price'>
              <span>KSH. 1000</span>
            </div>
            <span>author</span>
            <div className='stock-available'>
              <span>In stock(22 available)</span>
            </div>
          </div>
        </div>
        <div className='book-desc'>
          <h2>Description</h2>
          <p>bookdesc</p>
        </div>
        

      </div>
    </>
  )
}

export default Book