import { Navigate, Route, Routes } from 'react-router-dom';

import Information from './information';

export function PaymentsRoutes() {
    return (
        <Routes>
            <Route path="/information" element={<Information />} />
            <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
    );
}
