import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

function TaskForm({ token }) {
  const { goalId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [frequency, setFrequency] = useState('');
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [reminderTime, setReminderTime] = useState('');
  const navigate = useNavigate();

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await api.createTask({ goal_id: goalId, title, description, quantity, frequency, days_of_week: daysOfWeek, reminder_time: reminderTime }, token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Create task error', err);
    }
  };

  const handleDaysOfWeekChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDaysOfWeek([...daysOfWeek, value]);
    } else {
      setDaysOfWeek(daysOfWeek.filter((day) => day !== value));
    }
  };

  return (
    <form onSubmit={handleCreateTask}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      <input type="text" placeholder="Frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)} required />
      <div>
        <label>
          <input type="checkbox" value="Monday" onChange={handleDaysOfWeekChange} /> Monday
        </label>
        <label>
          <input type="checkbox" value="Tuesday" onChange={handleDaysOfWeekChange} /> Tuesday
        </label>
        <label>
          <input type="checkbox" value="Wednesday" onChange={handleDaysOfWeekChange} /> Wednesday
        </label>
        <label>
          <input type="checkbox" value="Thursday" onChange={handleDaysOfWeekChange} /> Thursday
        </label>
        <label>
          <input type="checkbox" value="Friday" onChange={handleDaysOfWeekChange} /> Friday
        </label>
        <label>
          <input type="checkbox" value="Saturday" onChange={handleDaysOfWeekChange} /> Saturday
        </label>
        <label>
          <input type="checkbox" value="Sunday" onChange={handleDaysOfWeekChange} /> Sunday
        </label>
      </div>
      <input type="time" placeholder="Reminder Time" value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} />
      <button type="submit">Create Task</button>
    </form>
  );
}

export default TaskForm;
