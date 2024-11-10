// axiosInstance.js
import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust base URL as needed
  timeout: 10000, // Optional: Set request timeout (10 seconds)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
