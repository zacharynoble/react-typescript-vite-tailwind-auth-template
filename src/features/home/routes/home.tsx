import { MainLayout } from '@/components/layouts/main-layout';
import { Meta } from '@/components/misc/meta';

import { About } from '../components/about';

export const Home = () => {
    return (
        <MainLayout>
            <Meta title="Home" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <div className="flex justify-center">
                <p>You Are Home.</p>
            </div>
            <About />
        </MainLayout>
    );
};
