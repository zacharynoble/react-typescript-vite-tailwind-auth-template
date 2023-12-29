import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';
import useAuth from './stores/auth';

export default function App() {
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
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
