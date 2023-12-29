import type { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
    title: string;
    description: string;
}

export default function Meta({ title, description }: Props): ReactElement {
    return (
        <Helmet>
            <title>{title} - Your App Name</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}
