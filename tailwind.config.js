/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
			lato: ['Lato', 'sans-serif'],
		},
    boxShadow: {
      menu: ['0px 2px 8px rgba(0, 0, 0, 0.15)'],
      card: '-1px -1px 2px rgba(255, 255, 255, 0.06), 2px 2px 3px rgba(0, 0, 0, 0.1)',
      dropTwilight: '-1px -1px 2px rgba(255, 255, 255, 0.06), 2px 2px 3px rgba(0, 0, 0, 0.1)',
      button: '4px 4px 6px rgba(134, 176, 255, 0.08), inset 2px 2px 3px rgba(255, 255, 255, 0.19), inset -1px -1px 3px rgba(255, 255, 255, 0.06)',
      checkbox: '-1px -1px 3px 0 rgba(255, 255, 255, 0.06), 2px 2px 3px 0 rgba(0, 0, 0, 0.19)',
    },
    extend: {
      colors: {
        dark: '#1D1E2C',
        textColor: '#A1A1A1',
        green: '#039963',
        red: '#FA3C3C',
        orange: '#EE9441',
        blueWhale: '#2585EC',
        primary: '#5E88D8',
        blueLightPup: '#35364D',
        bluePup: '#252635',
        blueSpace: '#2E2F3F',
        bluePeriwinkle: '#656D81'
      }
    },
  },
  plugins: [],
}
