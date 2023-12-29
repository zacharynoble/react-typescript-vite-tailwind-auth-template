import { Fragment, type ReactNode } from 'react';

import Header from '../header';

interface Props {
    children?: ReactNode;
}

export default function MainLayout({ children }: Props) {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
}
