import { Helmet } from 'react-helmet-async';

interface Props {
    title: string;
    description: string;
}

export const Meta = ({ title, description }: Props) => {
    return (
        <Helmet>
            <title>{title} - Your App Name</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};
