// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
