import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { useAuth } from './stores/auth';

export const App = () => {
    const { setAuthed, setTokenData } = useAuth();

    useEffect(() => {
        const handleStorage = () => {
            setAuthed();
            setTokenData();
        };

        window.addEventListener('storage', handleStorage);

        return () => window.removeEventListener('storage', handleStorage);
    }, [setAuthed, setTokenData]);

    return (
        <HelmetProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </HelmetProvider>
    );
};
