import './App.css'
import Navbar from './navbar/Navbar';
import Sidebar from './navbar/Sidebar';
import Main from './navbar/Main';
function App() {
  return (
    <div>
      <h1 className="main-head">ONLINE BOOK STORE</h1>
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
