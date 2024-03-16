import type { DecodedToken } from '@/types/token';

const KEY = 'access_token';

export const decodeJwt = (token: string) => {
    const base64 = token.split('.')[1]!.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(c => {
                return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
            })
            .join(''),
    );

    return JSON.parse(jsonPayload);
};

export const getTokenFromStorage = () => localStorage.getItem(KEY) || '';

export const setTokenToStorage = (value: string) => {
    localStorage.setItem(KEY, value);
    window.dispatchEvent(new Event('storage'));
};

export const removeTokenFromStorage = () => {
    localStorage.removeItem(KEY);
    window.dispatchEvent(new Event('storage'));
};

export const isValidToken = (token: string) => {
    try {
        const decodedToken = decodeJwt(token) as DecodedToken;
        if (Date.now() >= decodedToken.exp * 1000) {
            return false;
        }
        if (!decodedToken.name || !decodedToken.email) {
            return false;
        }
        return true;
    } catch {
        return false;
    }
};

export const isTokenExpired = () => {
    try {
        const token = getTokenFromStorage();
        const decodedToken = decodeJwt(token) as DecodedToken;
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp - currentTime <= 0) {
            return true;
        }
        return false;
    } catch {
        return true;
    }
};

export const getTokenData = () => {
    try {
        const token = getTokenFromStorage();
        const decodedToken = decodeJwt(token) as DecodedToken;
        return {
            name: decodedToken.name,
            email: decodedToken.email,
            userId: decodedToken.id,
        };
    } catch {
        return { name: '', email: '', userId: '' };
    }
};
