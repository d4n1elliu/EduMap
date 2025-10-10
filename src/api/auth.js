import api from "./api";

const controller = 'auth';

// Temporary student number for login
export const login = async (username, password) => {
    return await api.post(`${controller}/login`, { username, password });
};

// Registration with all required fields
export const register = async (email, password, firstName, lastName, role, course) => {
    return await api.post(`${controller}/register`, { 
        email, 
        password, 
        firstName, 
        lastName, 
        role, 
        course 
    });
};
