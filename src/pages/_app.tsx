import { ChakraProvider } from '@chakra-ui/react';

import { Header } from '../components';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
