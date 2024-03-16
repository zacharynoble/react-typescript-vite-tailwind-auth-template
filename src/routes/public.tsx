import { Fragment, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/stores/auth';

export const PublicRoutes = () => {
    const { authed } = useAuth();

    if (authed) {
        return <Navigate to="/" replace />;
    }

    return (
        <Suspense fallback={<Fragment />}>
            <Outlet />
        </Suspense>
    );
};
