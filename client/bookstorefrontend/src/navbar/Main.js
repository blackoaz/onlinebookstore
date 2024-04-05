import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Main({ addToCart, selectedCategory }) {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch books and categories
    Promise.all([
      fetch('http://localhost:3001/api/books').then(res => res.json()),
      fetch('http://localhost:3001/api/category').then(res => res.json())
    ])
    .then(([booksData, categoriesData]) => {
      setBooks(booksData);
      setCategories(categoriesData);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  }

  const addToCartFunction = (book) => {
    addToCart({
      name: book.name,
      author: book.author,
      price: book.price,
      image: book.image
    });
  };

  const normalizedCategory = selectedCategory ? selectedCategory.toLowerCase().trim() : null;
  const filteredBooks = normalizedCategory ? books.filter(book => {
    const bookCategory = categories.find(category => category._id === book.category);
    return bookCategory && bookCategory.categoryName.toLowerCase().trim() === normalizedCategory;
  }) : books;

  return (
    <>
      <div className='main-sec'>
        <div className='main-heading'>
          <h2>ALL PRODUCTS</h2>
          <hr />
        </div>

        <div className='container text-center books-sec'>
          <div className='row books'>
            {filteredBooks.map((book, _id) => (
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
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
