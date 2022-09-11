import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<title>Quran Translations</title>
				<meta
					name='description'
					content='Nottingham Islam: offers multiple Quran transactions'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>
				<link
					rel='icon'
					href='/niic.png'
				/>
				<link
					rel='apple-touch-icon'
					href='/icon.png'></link>
				<meta
					name='theme-color'
					content='#2D8D43'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
