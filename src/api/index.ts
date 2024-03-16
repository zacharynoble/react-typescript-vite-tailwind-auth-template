import xior from 'xior';

import { API_URL } from '@/config';
import { getTokenFromStorage, isTokenExpired, removeTokenFromStorage, setTokenToStorage } from '@/utils/token';

const baseConfig = {
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
};

export const api = xior.create(baseConfig);
export const apiProtected = xior.create(baseConfig);

export const fetcher = (url: string) => api.get(url).then(res => res.data);
export const fetcherProtected = (url: string) => apiProtected.get(url).then(res => res.data);

const refresh = async () => {
    try {
        const response = await apiProtected.post('/refresh');
        const { accessToken } = response.data;

        setTokenToStorage(accessToken);
        return accessToken;
    } catch (error) {
        removeTokenFromStorage();
        return null;
    }
};

apiProtected.interceptors.request.use(
    async requestConfig => {
        const config = requestConfig ?? {};
        const token = isTokenExpired() && requestConfig.url !== '/refresh' ? await refresh() : getTokenFromStorage();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => Promise.reject(error),
);
