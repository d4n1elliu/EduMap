import axios from 'axios';

// Backend API endpoint; override with VITE_API_URL in a .env file
const API_BASE_URL =
    import.meta.env.VITE_API_URL ??
    'https://edumap-gxf4bpfyg3ghbpgy.australiacentral-01.azurewebsites.net:5046/api';

// Shared axios instance used by every api/* module
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Add interceptor to handle 401 responses
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status;
        if (status === 401) {
            // clear any bad/expired token
            localStorage.removeItem('authToken');
        }
        return Promise.reject(error);
    }
);

export default api;
