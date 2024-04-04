import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Main({ addToCart }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/books', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => setBooks(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, [books]);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  }

  const addToCartFunction = (book) => {
    // Call addToCart function passed from the Main component
    addToCart({
      name: book.name,
      author: book.author,
      price: book.price,
      image: book.image
    });
  };

  return (
    <>
      <div className='main-sec'>
        <div className='main-heading'>
          <h2>ALL PRODUCTS</h2>
          <hr />
        </div>

        <div className='container text-center books-sec'>
          <div className='row books'>
            {books ? books.map((book, _id) => (
              <div className='col' key={_id}>
                <Link to={`/specificbook/${book._id}`} className='link-to'>
                  <div className='book-img'>
                    <img src={book.image} alt='attic-blank' />
                  </div>
                  <div className='book-rating'>
                    <span>Rating {book.rating}/5</span>
                  </div>
                  <span className='book-title'>{truncateText(book.name, 20)}</span>
                  <div className='price'>
                    <span>KSH.{book.price}</span>
                  </div>
                </Link>
                <div className='add-cart'>
                  <button onClick={() => addToCartFunction(book)}>ADD TO CART</button>
                </div>
              </div>
            )): <div>
            <p>Loading data...</p>
          </div> }   
          </div>
        </div>

      </div>
    </>
  );
}
