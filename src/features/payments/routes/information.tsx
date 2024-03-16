import { Fragment } from 'react';
import useSWR from 'swr';

import { fetcherProtected } from '@/api';
import { Meta } from '@/components/misc/meta';
import { useUser } from '@/hooks/use-user';

import type { Payment } from '../types';

export const Information = () => {
    const { userId } = useUser();
    const { data } = useSWR<{ payments: Payment[] }>(`/payments/${userId}`, fetcherProtected);

    return (
        <Fragment>
            <Meta title="Payment Information" description="View information about payments" />
            <p className="flex justify-center mt-10">Information about payments.</p>
            {data?.payments.map(payment => (
                <p>{payment.name}</p>
            ))}
        </Fragment>
    );
};
