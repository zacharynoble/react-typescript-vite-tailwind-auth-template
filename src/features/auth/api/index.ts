import { axiosPublic } from '@/api';
import { isValidToken, removeTokenFromStorage, setTokenToStorage } from '@/utils/token';

export const login = async (email: string, password: string) => {
    const response = await axiosPublic({
        method: 'post',
        url: '/login',
        data: {
            email,
            password,
        },
    });
    const { accessToken } = response.data;

    if (!isValidToken(accessToken)) {
        throw new Error('Invalid Token.');
    }

    setTokenToStorage(accessToken);
};

export const logout = () => removeTokenFromStorage();

export const register = async (email: string, password: string, name: string) => {
    await axiosPublic({
        method: 'post',
        url: '/register',
        data: {
            email,
            name,
            password,
        },
    });
};
