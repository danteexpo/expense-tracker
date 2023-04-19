// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
