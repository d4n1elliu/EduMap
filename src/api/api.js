import axios from 'axios';

// Backend API endpoint
const endpointUrl = "http://localhost:5046/api";

// Create axios instance
const api = axios.create({
    baseURL: endpointUrl,
});

// Add interceptor to handle 401 responses
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            //window.location.href = '/login'; // redirect to login
        }
        return Promise.reject(error);
    }
);

export default api;
