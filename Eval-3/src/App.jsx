import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import LevelPage from './components/Levels/LevelPage';
import LoginPage from './components/LoginPage/LoginPage';
import TypingTesting from './components/TypingTesting/TypingTesting';
import Navbar from './components/Home/Navbar'; 
import ToTopArrow from './components/Home/ToTopArrow';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="levels" element={<LevelPage />} />
        <Route path="typingtest" element={<TypingTesting />} />
      </Routes>
      <ToTopArrow />
    </BrowserRouter>
  );
}

export default App;
