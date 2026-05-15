import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '/Phim/',

    plugins: [tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          admin: path.resolve(__dirname, 'admin.html'),
          movieDetail: path.resolve(__dirname, 'ChiTietPhim/MovieDetail.html'),
          booking: path.resolve(__dirname, 'DatVe/Booking.html'),
          aboutUs: path.resolve(__dirname, 'Information_AboutUs/AboutUs.html'),
          history: path.resolve(__dirname, 'LichSu/History.html'),
          login: path.resolve(__dirname, 'Login/Login.html'),
          movies: path.resolve(__dirname, 'Phim/Movies.html'),
        },
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

// export default defineConfig({
//   plugins: [tailwindcss()],
//   base: '/Phim/',
//   });