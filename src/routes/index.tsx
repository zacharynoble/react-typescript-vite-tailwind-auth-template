import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '@/features/home/routes/home';
import { useResetScroll } from '@/hooks/use-reset-scroll';
import { lazyImport } from '@/utils/lazy-import';

import { ProtectedRoutes } from './protected';
import { PublicRoutes } from './public';

const { AuthRoutes } = lazyImport(() => import('@/features/auth/routes'), 'AuthRoutes');
const { PaymentsRoutes } = lazyImport(() => import('@/features/payments/routes'), 'PaymentsRoutes');

export const AppRoutes = () => {
    useResetScroll();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PublicRoutes />}>
                <Route path="/*" element={<AuthRoutes />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/payments/*" element={<PaymentsRoutes />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
