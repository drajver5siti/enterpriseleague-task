module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'main': 'url(https://enterpriseleague.com/public/img/featured/news/background.svg)'
			},
			colors: {
				accent: '#2189d1',
				primary: '#707070',
			},
			screens: {
				md: '900px',
			},
			boxShadow: {
				'box': '0px 3px 6px #00000029;'
			}
		},
	},
	plugins: [
		// ...
		require('@tailwindcss/line-clamp'),
	],
}
