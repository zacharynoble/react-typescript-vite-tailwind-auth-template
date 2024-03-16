import { Fragment, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MainLayout } from '@/components/layouts/main-layout';
import { useAuth } from '@/stores/auth';

export const ProtectedRoutes = () => {
    const { authed } = useAuth();

    if (!authed) {
        return <Navigate to="/login" replace />;
    }

    return (
        <MainLayout>
            <Suspense fallback={<Fragment />}>
                <Outlet />
            </Suspense>
        </MainLayout>
    );
};
