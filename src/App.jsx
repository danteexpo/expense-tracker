// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// components
import Navbar from './components/Navbar';
// auth
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {user && <Route path="/" element={<Home />} />}
            {!user && <Route path="/" element={<Navigate to="/login" />} />}
            {user && <Route path="/login" element={<Navigate to="/" />} />}
            {!user && <Route path="/login" element={<Login />} />}
            {user && <Route path="/signup" element={<Navigate to="/" />} />}
            {!user && <Route path="/signup" element={<Signup />} />}
            {user && <Route path="*" element={<Navigate to="/" />} />}
            {!user && <Route path="*" element={<Navigate to="/login" />} />}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
