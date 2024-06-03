import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function GoalForm({ token }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [minTimeline, setMinTimeline] = useState('');
  const [maxTimeline, setMaxTimeline] = useState('');
  const [userTimeline, setUserTimeline] = useState('');
  const navigate = useNavigate();

  const handleCreateGoal = async (e) => {
    e.preventDefault();
    try {
      await api.createGoal({ title, description, min_timeline: minTimeline, max_timeline: maxTimeline, user_timeline: userTimeline }, token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Create goal error', err);
    }
  };

  return (
    <form onSubmit={handleCreateGoal}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Min Timeline" value={minTimeline} onChange={(e) => setMinTimeline(e.target.value)} required />
      <input type="number" placeholder="Max Timeline" value={maxTimeline} onChange={(e) => setMaxTimeline(e.target.value)} required />
      <input type="number" placeholder="Your Timeline" value={userTimeline} onChange={(e) => setUserTimeline(e.target.value)} required />
      <button type="submit">Create Goal</button>
    </form>
  );
}

export default GoalForm;
