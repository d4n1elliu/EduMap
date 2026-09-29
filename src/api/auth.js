import api from './client';

const AUTH_BASE = 'auth';

export async function login(username, password) {
    return await api.post(`${AUTH_BASE}/login`, { username, password });
}

export async function register({ email, password, firstName, lastName, role }) {
    return await api.post(`${AUTH_BASE}/register`, {
        email,
        password,
        firstName,
        lastName,
        role,
    });
}
