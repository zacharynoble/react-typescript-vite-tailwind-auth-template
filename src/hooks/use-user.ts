import useAuth from '@/stores/auth';

export default function useUser() {
    const { tokenData } = useAuth();

    return tokenData;
}
