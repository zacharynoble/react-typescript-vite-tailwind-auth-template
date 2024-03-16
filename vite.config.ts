import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';

export default () => {
    return defineConfig({
        plugins: [react(), compression()],
        server: {
            host: '127.0.0.1',
            port: 3000,
        },
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    });
};
