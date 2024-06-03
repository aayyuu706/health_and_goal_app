import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function LogForm({ token }) {
  const [goalId, setGoalId] = useState('');
  const [taskId, setTaskId] = useState('');
  const [logEntry, setLogEntry] = useState('');
  const navigate = useNavigate();

  const handleCreateLog = async (e) => {
    e.preventDefault();
    try {
      await api.createLog({ goal_id: goalId, task_id: taskId, log_entry: logEntry }, token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Create log error', err);
    }
  };

  return (
    <form onSubmit={handleCreateLog}>
      <input type="text" placeholder="Goal ID" value={goalId} onChange={(e) => setGoalId(e.target.value)} required />
      <input type="text" placeholder="Task ID" value={taskId} onChange={(e) => setTaskId(e.target.value)} required />
      <textarea placeholder="Log Entry" value={logEntry} onChange={(e) => setLogEntry(e.target.value)} required />
      <button type="submit">Create Log</button>
    </form>
  );
}

export default LogForm;
