import { useAuth } from '@/stores/auth';

export const useUser = () => {
    const { tokenData } = useAuth();

    return tokenData;
};
