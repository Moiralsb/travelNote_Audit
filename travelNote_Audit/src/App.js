import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouterAuth from './components/RouterAuth';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NotFond from './Pages/NotFond';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RouterAuth><Home /></RouterAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFond />} />
      </Routes>
    </Router>
  );
};

export default App;