import React, { useState, useEffect } from 'react';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/category',{
      mode:'cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => setCategories(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="sidebar">
        <div>
          <div className='category'>
            <>Books Category</>
          </div>

          <div className='category-list'>
            {categories ? (
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>{category.categoryName}</li>
                ))}
              </ul>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
