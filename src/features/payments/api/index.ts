import { useEffect, useState } from 'react';

import { axiosPrivate } from '@/api';

import type { Payment } from '../types';

const getPayments = async (userId: number): Promise<Payment[]> => {
    const response = await axiosPrivate({
        method: 'get',
        url: `/payments/${userId}`,
    });

    return response.data.payments;
};

export const usePayments = (userId: number) => {
    const [payments, setPayments] = useState<Payment[]>([]);

    useEffect(() => {
        const get = async () => {
            const resPayments = await getPayments(userId);
            setPayments(resPayments);
        };
        get();
    }, [userId]);

    return payments;
};
