import { Fragment } from 'react';

import Meta from '@/components/misc/meta';

export default function Information() {
    return (
        <Fragment>
            <Meta title="Payment Information" description="View information about payments" />
            <p className="flex justify-center mt-10">Information about payments.</p>
        </Fragment>
    );
}
