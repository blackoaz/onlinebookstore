import React, { useState, useEffect } from 'react';

export default function Sidebar({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/category',{
      mode:'cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('There was an error fetching data from the server.');
        }
        return response.json();
      })
      .then((result) => setCategories(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="container sidebar">
        
          <div className='category'>
            <h4>Books Category</h4>
          </div>

          <div className='category-list'>
            {categories ? (
              <ul>
                {categories.map((category, id) => (
                  <li key={id} onClick={() => onSelectCategory(category.categoryName)}>{category.categoryName}</li>
                ))}
              </ul>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
      </div>
    </div>
  );
}
