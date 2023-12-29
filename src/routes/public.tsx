import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import useAuth from '@/stores/auth';

export default function PublicRoutes() {
    const navigate = useNavigate();
    const { authed } = useAuth();

    useEffect(() => {
        if (authed) {
            navigate('/', { replace: true });
        }
    }, [authed, navigate]);

    return <Outlet />;
}
