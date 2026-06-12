import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ContactUs from './components/ContactUs';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
