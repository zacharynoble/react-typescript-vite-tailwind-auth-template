import { Navigate, Route, Routes } from 'react-router-dom';

import AuthRoutes from '@/features/auth/routes';
import Home from '@/features/misc/routes/home';
import useResetScroll from '@/hooks/use-reset-scroll';
import { lazyImport } from '@/utils/lazy-import';

import ProtectedRoutes from './protected';
import PublicRoutes from './public';

const { PaymentsRoutes } = lazyImport(() => import('@/features/payments/routes'), 'PaymentsRoutes');

export default function AppRoutes() {
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
}
