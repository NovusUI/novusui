import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "green":"#00DC82"
      },
      width:{
        "360":"360px",
        "365":"365px",
        "469":"550px"
      },
      spacing:{
        "120px":"120px"

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textGradient: {
        'sub-titles': {
          background: 'linear-gradient(45deg, #FFD700, #FF0000)',
          '-webkit-background-clip': 'text',
          color: 'transparent',
        },
      },
    },
  },
  plugins: [],
}
export default config
