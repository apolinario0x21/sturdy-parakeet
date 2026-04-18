import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#050b14',
          panel: '#0a1424',
          border: '#183457',
          green: '#42ff9f',
          cyan: '#57d8ff',
          amber: '#f9c74f',
          text: '#d9e5f1',
          mute: '#8ba2bd'
        }
      },
      fontFamily: {
        mono: [
          'var(--font-jetbrains-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace'
        ]
      }
    }
  },
  plugins: []
};

export default config;
