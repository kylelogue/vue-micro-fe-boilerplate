import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'main',
            remotes: {
                'app-1': 'http://localhost:3001/assets/remoteEntry.js',
                'app-2': 'http://localhost:3002/assets/remoteEntry.js'
            },
            shared: ['vue', 'pinia']
        })
    ],
    build: {
        minify: false,
        target: ['chrome89', 'edge89', 'firefox89', 'safari15']
    }
});
