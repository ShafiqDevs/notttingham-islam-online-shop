/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				green_primary: `#2D8D43`,
				green_seconday: `#53B353`,
				custome_gray: `#565656`,
				custome_orange: `#F26C21`,
				custome_blue: `#889CAF`,
			},
		},
	},
	plugins: [],
};
