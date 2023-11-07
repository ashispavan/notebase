import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({}),
    csrf: {
      checkOrigin: true
    }
  },
  preprocess: [vitePreprocess({})]
};

export default config;
