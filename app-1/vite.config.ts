import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'app-1',
            filename: 'remoteEntry.js',
            exposes: {
                //   './BasketInfo': './src/components/BasketInfo.vue',
                //   './BuyButton': './src/components/BuyButton.vue',
            },
            shared: ['vue', 'pinia']
        })
    ],
    build: {
        minify: true,
        target: ['chrome89', 'edge89', 'firefox89', 'safari15']
    }
});
