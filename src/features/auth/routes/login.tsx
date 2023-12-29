import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '@/components/elements/button';
import Input from '@/components/forms/input';
import Meta from '@/components/misc/meta';
import preventDefault from '@/utils/prevent-default';

import { login } from '../api';

interface Data {
    email: string;
    password: string;
}

export default function Login() {
    const { handleSubmit, control, setError, setValue } = useForm<Data>({
        resolver: zodResolver(
            z.object({
                email: z.string().email().min(1, 'Enter your email address'),
                password: z.string().min(1, 'Enter your password'),
            }),
        ),
    });

    const onSubmit = (data: Data) =>
        login(data.email, data.password).catch(error => {
            const generic = 'Sorry, something went wrong signing you in.';

            setValue('password', '');
            setError('password', {
                type: 'server',
                message: axios.isAxiosError(error) ? error.response?.data || generic : generic,
            });
        });

    return (
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 pb-40 lg:px-8">
            <Meta title="Login" description="Log in to your account" />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={preventDefault}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                control={control}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                control={control}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
