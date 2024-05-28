import React from 'react';
import { BrowserRouter as Router, Routes ,Route, Navigate } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/signup" element={Signup} />
        <Route path="/login" element={Login} />
      </Routes>
    </Router>
  );
};

export default App;
