import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Credits from './pages/Credits';

function App() {
  return (
    <div className="app 100vh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-rikir" element={<About />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
