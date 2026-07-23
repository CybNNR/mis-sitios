import './index.css';
import Blog from './pages/blog';
import Landing from './pages/landing';
import Navbar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>

        <Route path = "/" element = {<Landing />} />
        <Route path = "/blog" element = {<Blog />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

