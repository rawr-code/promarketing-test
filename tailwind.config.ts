import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-robotoCondensed)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#FBBF24',
      },
      backgroundImage: {
        'card-hover-gradient':
          'linear-gradient(0deg, #000000 4.5%, rgba(0, 0, 0, 0) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
