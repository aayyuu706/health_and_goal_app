import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Dashboard({ token }) {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await api.getGoals(token);
        setGoals(response.data);
      } catch (err) {
        console.error('Fetch goals error', err);
      }
    };
    fetchGoals();
  }, [token]);

  return (
    <div>
      <div>
      <h1 style={{ color: 'red', fontSize: '54px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>MY GOALS</h1> </div>
      {goals.map((goal) => (
        <div key={goal._id}>
          <h1>{goal.title}</h1>
          <p>{goal.description}</p>
          <Link to={`/tasks/new/${goal._id}`}>Add Task</Link>
        </div>
      ))}
      <Link to="/goals/new">Add Goal</Link>
    </div>
  );
}

export default Dashboard;
