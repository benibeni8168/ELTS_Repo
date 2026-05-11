import axios from 'axios';

// Create an axios instance with your backend URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor (optional - for authentication tokens, etc.)
apiClient.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Export the client for use in other files
export default apiClient;

// Example API functions - add more as needed
export const fetchServices = () => apiClient.get('/services');
export const submitContactForm = (data) => apiClient.post('/contact/submit/', data);
export const fetchCaseStudies = () => apiClient.get('/case-studies');
