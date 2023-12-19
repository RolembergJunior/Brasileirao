import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      opacity:{
        '75' : '.75'
      },
      backgroundColor: {
        'black-rgba' : 'rgba(0,0,0,0.75)'
      },
      width:{
        '128' : '100vw',
        '80vw' : '80vw'
      },
      maxWidth:{
        '75' : '75vw'
      },
      height: {
        '200' : '100vw',
        '128': '39rem',
      },
      maxHeight: {
        '90' : '90vw'
      }
    },
  },
  plugins: [],
}
export default config
