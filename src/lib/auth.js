// Single place for reading/writing the JWT in localStorage
const TOKEN_KEY = 'token';

// Strip accidental surrounding quotes and whitespace
function clean(token) {
    return (token || '').replace(/^"(.+)"$/, '$1').trim();
}

export function getToken() {
    return clean(localStorage.getItem(TOKEN_KEY));
}

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export function isLoggedIn() {
    return typeof window !== 'undefined' && Boolean(getToken());
}

// Axios config with a Bearer header; falls back to the stored token
export function authConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${clean(token) || getToken()}`,
        },
    };
}
