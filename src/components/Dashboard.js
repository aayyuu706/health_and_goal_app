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
      <h1>My Goals</h1>
      {goals.map((goal) => (
        <div key={goal._id}>
          <h2>{goal.title}</h2>
          <p>{goal.description}</p>
          <Link to={`/tasks/new/${goal._id}`}>Add Task</Link>
        </div>
      ))}
      <Link to="/goals/new">Add Goal</Link>
    </div>
  );
}

export default Dashboard;
