import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = {
  signup: (userData) => axios.post(`${API_URL}/auth/signup`, userData),
  login: (userData) => axios.post(`${API_URL}/auth/login`, userData),
  getGoals: (token) => axios.get(`${API_URL}/goals`, { headers: { Authorization: token } }),
  createGoal: (goalData, token) => axios.post(`${API_URL}/goals`, goalData, { headers: { Authorization: token } }),
  updateGoal: (goalId, goalData, token) => axios.put(`${API_URL}/goals/${goalId}`, goalData, { headers: { Authorization: token } }),
  deleteGoal: (goalId, token) => axios.delete(`${API_URL}/goals/${goalId}`, { headers: { Authorization: token } }),
  getTasks: (goalId, token) => axios.get(`${API_URL}/tasks/${goalId}`, { headers: { Authorization: token } }),
  createTask: (taskData, token) => axios.post(`${API_URL}/tasks`, taskData, { headers: { Authorization: token } }),
  updateTask: (taskId, taskData, token) => axios.put(`${API_URL}/tasks/${taskId}`, taskData, { headers: { Authorization: token } }),
  deleteTask: (taskId, token) => axios.delete(`${API_URL}/tasks/${taskId}`, { headers: { Authorization: token } }),
  getLogs: (token) => axios.get(`${API_URL}/logs`, { headers: { Authorization: token } }),
  createLog: (logData, token) => axios.post(`${API_URL}/logs`, logData, { headers: { Authorization: token } }),
};

export default api;
