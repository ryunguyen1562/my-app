import './App.css';
import LoginHeader from './component/loginheader';
import Footer from './component/footer';
import Books from './component/Books';
import { Route, Routes } from 'react-router-dom';
import Book from './component/Book';

function App() {
  return (
    <div className="App">
      <LoginHeader></LoginHeader>
      <Routes>
        <Route path='books' element={<Books/>}/>
        <Route path='books/:bookcode' element={<Book/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

