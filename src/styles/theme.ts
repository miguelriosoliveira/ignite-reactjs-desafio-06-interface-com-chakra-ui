import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		highlight: '#FFBA08',
		dark: {
			black: '#000000',
			headingsAndText: '#47585B',
			info: '#999999',
		},
		light: {
			white: '#FFFFFF',
			headingsAndText: '#F5F8FA',
			info: '#DADADA',
		},
	},
	fonts: {
		headings: 'Poppins',
		body: 'Poppins',
	},
	styles: {
		global: {
			body: {
				bg: 'light.headingsAndText',
				color: 'dark.headingsAndText',
			},
		},
	},
});
