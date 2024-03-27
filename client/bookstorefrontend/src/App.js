import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import LoginPage from './auth/LoginPage'
import Home from './Home';
import BookDetail from './bookdetails/Book';
import Shoppingcart from './shoppingcart/Cart'




function App() {
  const isloggedIn = true;

  return (
    <>
    {/* <h1 className="main-head">ONLINE BOOK STORE</h1> */}
      <Routes>
        {!isloggedIn ? (
          <Route path="/" element={<LoginPage />} />
        ) : (
          <>
          <Route path="/" element={<Home />} />
          <Route path="/specificbook/:bookId" element={<BookDetail />} />
          <Route path="/cart" element={<Shoppingcart />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
