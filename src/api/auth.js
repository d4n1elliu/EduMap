import api from "./api";

const controller = 'auth';

// Temporary student number for login
export const login = async (username, password) => {
    return await api.post(`${controller}/login`, { username, password });
};

// Temporary student number for registration
export const register = async (email, username, password) => {
    return await api.post(`${controller}/register`, { email, username, password, studentNumber });
};
