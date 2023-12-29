import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Spinner from '@/components/elements/spinner';
import MainLayout from '@/components/layouts/main-layout';
import useAuth from '@/stores/auth';

export default function ProtectedRoutes() {
    const navigate = useNavigate();
    const { authed } = useAuth();

    useEffect(() => {
        if (!authed) {
            navigate('/login', { replace: true });
        }
    }, [authed, navigate]);

    return (
        <MainLayout>
            <Suspense fallback={<Spinner />}>
                <Outlet />
            </Suspense>
        </MainLayout>
    );
}
