import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default () => {
    return defineConfig({
        plugins: [react()],
        server: {
            host: '127.0.0.1',
            port: 3000,
        },
        resolve: {
            alias: {
                '@': '/src',
            },
        },
        build: {
            rollupOptions: {
                output: {
                    inlineDynamicImports: true,
                },
            },
        },
    });
};
