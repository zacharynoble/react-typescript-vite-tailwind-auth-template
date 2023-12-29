import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './login';

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
