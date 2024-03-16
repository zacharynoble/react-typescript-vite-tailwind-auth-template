import { api } from '@/api';
import { isValidToken, removeTokenFromStorage, setTokenToStorage } from '@/utils/token';

export const login = async (email: string, password: string) => {
    const response = await api.post('/login', { email, password });
    const { accessToken } = response.data;

    if (!isValidToken(accessToken)) {
        throw new Error('Invalid Token.');
    }

    setTokenToStorage(accessToken);
};

export const register = async (email: string, password: string, name: string) => {
    await api.post('/register', { email, name, password });
};

export const logout = () => removeTokenFromStorage();
