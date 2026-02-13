import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuCategory from './pages/MenuCategory';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:categoryId" element={<MenuCategory />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
