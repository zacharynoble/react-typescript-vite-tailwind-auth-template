import { Fragment, type ReactNode } from 'react';

import { Header } from '../header';

interface Props {
    children?: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
};
