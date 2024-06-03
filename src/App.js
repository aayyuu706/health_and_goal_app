import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GoalForm from './components/GoalForm';
import TaskForm from './components/TaskForm';
import LogForm from './components/LogForm';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import api from './services/api';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<LoginForm setToken={setToken} />} />
          <Route path="/signup" exact element={<SignupForm setToken={setToken} />} />
          <Route path="/dashboard" exact element={<Dashboard token={token} />} />
          <Route path="/goals/new" exact element={<GoalForm token={token} />} />
          <Route path="/tasks/new/:goalId" exact element={<TaskForm token={token} />} />
          <Route path="/logs/new" exact element={<LogForm token={token} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
