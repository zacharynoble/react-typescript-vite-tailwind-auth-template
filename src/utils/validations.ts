import axios from 'axios';
import type { UseFormSetError } from 'react-hook-form';

import type { ValidationError } from '@/types/errors';

export const validateInput = (error: any, setError: UseFormSetError<any>) => {
    if (axios.isAxiosError(error)) {
        const errors = error.response?.data?.errors as ValidationError[];
        if (errors) {
            errors.forEach(err =>
                setError(err.field, {
                    type: 'server',
                    message: err.message,
                }),
            );
            return false;
        }
    }

    return true;
};
