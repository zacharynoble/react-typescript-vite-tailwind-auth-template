import type { ReactElement } from 'react';
import { lazy } from 'react';

export const lazyImport = <T extends React.ComponentType<ReactElement>, I extends { [K2 in K]: T }, K extends keyof I>(
    factory: () => Promise<I>,
    name: K,
) => {
    return Object.create({
        [name]: lazy(() => factory().then(module => ({ default: module[name] }))),
    });
};
