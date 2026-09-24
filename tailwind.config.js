import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import theme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50: '#F4F7FA',
                    100: '#E6ECF2',
                    200: '#CCD9E5',
                    500: '#2B5B84', // Primary Navy Modern
                    600: '#1E4363',
                    700: '#132C43', // Dark Navy Sidebar
                },
                accent: {
                    rose: '#E96B85',   // Coral/Rose Modern Accent
                    coral: '#F08A8B',
                    soft: '#FFF0F3',   // Subtle active background
                },
                surface: {
                    bg: '#F8FAFC',     // Clean slate background
                    card: '#FFFFFF',
                }
            },
        },
    },

    plugins: [],
};
