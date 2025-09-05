import api from "./api";

const controller = 'auth';

export const login = async (username, password) => {
    return await api.post(`${controller}/login`, { username, password });
};

export const register = async (email, username, password) => {
    return await api.post(`${controller}/register`, { email, username, password, studentNumber });
};
