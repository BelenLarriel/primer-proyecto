import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';

const App = () => {
  return (


    <Router>
    <nav>
    <ul>
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li>
        <Link to="/registro" className="nav-link">Registro</Link>
      </li>
    </ul>
  </nav>





  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>





    
  );
};

export default App;
