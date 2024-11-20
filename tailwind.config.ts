import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E31C25', // Bright red - good contrast
          hover: '#B31118', // Darker red for hover states
          foreground: '#FFFFFF', // White text on primary
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Almost black
          foreground: '#FFFFFF', // White text on secondary
        },
        accent: {
          DEFAULT: '#F5F5F5', // Light gray
          foreground: '#1A1A1A', // Dark text on accent
        },
        destructive: {
          DEFAULT: '#991B1B', // Dark red
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#737373', // Medium gray
          foreground: '#FFFFFF',
        },
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;