import axios from 'axios';

// Backend API endpoint
const endpointUrl = "http://localhost:5046/api";

// Create axios instance
const api = axios.create({
    baseURL: endpointUrl,
});

// Add interceptor to handle 401 responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      // clear any bad/expired token
      localStorage.removeItem('authToken');
      // avoid redirect loops
      if (window.location.pathname !== '/login') {
        //window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
