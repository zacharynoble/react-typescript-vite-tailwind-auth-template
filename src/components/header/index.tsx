import { Link } from 'react-router-dom';

import { logout } from '@/features/auth/api';
import useAuth from '@/stores/auth';

export default function Header() {
    const { authed } = useAuth();

    return (
        <header className="flex justify-end w-full p-10 px-8 bg-white lg:px-16">
            {authed ? (
                <button onClick={logout} className="p-3 text-sm font-bold border border-gray-200 rounded-md bg-gray-50">
                    Logout
                </button>
            ) : (
                <Link to="/login" className="p-3 text-sm font-bold border border-gray-200 rounded-md bg-gray-50">
                    Login
                </Link>
            )}
        </header>
    );
}
