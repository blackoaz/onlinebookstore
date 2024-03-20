import React from 'react'

export default function Main() {
  return (
    <div className='main-sec'>
      <div className='main-heading'>
        <h2>ALL PRODUCTS</h2>
        <hr />
      </div>

      <div className='container text-center books-sec'>
        <div className='row books'>
          <div className='col'>
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
