import api from './client';

const AUTH_BASE = 'auth';

export async function login(username, password) {
    return await api.post(`${AUTH_BASE}/login`, { username, password });
}

export async function register({ email, password, firstName, lastName, role, gender, course, about, latitude, longitude }) {
    return await api.post(`${AUTH_BASE}/register`, {
        email,
        password,
        firstName,
        lastName,
        role,
        gender,
        course,
        about,
        latitude,
        longitude,
    });
}
