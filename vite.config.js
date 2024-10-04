import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@scss': path.resolve(__dirname, './src/scss'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@UI': path.resolve(__dirname, './src/UI/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@modules': path.resolve(__dirname, './src/modules/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@hooks': path.resolve(__dirname, './src/hooks/'),
            '@utils': path.resolve(__dirname, './src/utils/')
        },
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
});
