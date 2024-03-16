import { create } from 'zustand';

import type { TokenData } from '@/types/token';
import { getTokenData, getTokenFromStorage, isValidToken } from '@/utils/token';

interface AuthStore {
    authed: boolean;
    tokenData: TokenData;
    setAuthed: () => void;
    setTokenData: () => void;
}

export const useAuth = create<AuthStore>(set => ({
    authed: isValidToken(getTokenFromStorage()),
    tokenData: getTokenData(),
    setAuthed: () => set({ authed: isValidToken(getTokenFromStorage()) }),
    setTokenData: () => set({ tokenData: getTokenData() }),
}));
