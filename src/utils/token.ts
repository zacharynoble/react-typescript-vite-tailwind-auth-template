import jwt_decode from 'jwt-decode';

import type { DecodedToken } from '@/types/token';

const KEY = 'access_token';

export const getTokenFromStorage = (): string => localStorage.getItem(KEY) || '';

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
        const decodedToken = jwt_decode<DecodedToken>(token);
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

export const isTokenExpired = (): boolean => {
    try {
        const token = getTokenFromStorage();
        const decodedToken = jwt_decode<DecodedToken>(token);
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
        const decodedToken = jwt_decode<DecodedToken>(token);
        return {
            name: decodedToken.name,
            email: decodedToken.email,
        };
    } catch {
        return { name: '', email: '' };
    }
};
