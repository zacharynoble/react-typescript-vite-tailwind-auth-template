import axios from 'axios';

import { logout } from '@/features/auth/api';
import { getTokenFromStorage, isTokenExpired, isValidToken, setTokenToStorage } from '@/utils/token';

const apiUrl = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

const baseConfig = {
    baseURL: apiUrl,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
};

export const axiosPublic = axios.create(baseConfig);

export const axiosPrivate = axios.create(baseConfig);

const refresh = async () => {
    try {
        const token = getTokenFromStorage();

        const response = await axios(`/refresh`, {
            baseURL: apiUrl,
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
        });
        const { accessToken } = response.data;

        if (!isValidToken(accessToken)) {
            throw new Error('Invalid access token.');
        }

        setTokenToStorage(accessToken);

        return accessToken;
    } catch (error: unknown) {
        logout();
        return null;
    }
};

axiosPrivate.interceptors.request.use(
    async axiosRequestConfig => {
        const config = axiosRequestConfig;
        config.headers = config.headers ?? {};

        const token = isTokenExpired() ? await refresh() : getTokenFromStorage();
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    error => Promise.reject(error),
);
