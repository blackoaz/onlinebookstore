import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function BookDetail() {
  const { bookId } = useParams(); // Accessing the bookId parameter from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details based on bookId
    fetch(`http://localhost:3001/api/books/${bookId}`,{
      method:'GET'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => setBook(result))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [bookId]);

  if (!book) {
    return <div>Loading book details...</div>;
  }

  return (
    <div className='container book-detail-sec'>
      <Navbar />
      <div className='book-bio'>
        <img src={book.image} alt='book' />
        <div className='book-metadata'>
          <h3>{book.name}</h3>
          <div className='book-price'>
            <span>KSH. {book.price}</span>
          </div>
          <span>{book.author}</span>
          <div className='stock-available'>
            <span>In stock ({book.quantity} available)</span>
          </div>
        </div>
      </div>
      <div className='book-desc'>
        <h2>Description</h2>
        <p>{book.sysnposis}</p>
      </div>
    </div>
  );
}

export default BookDetail;
