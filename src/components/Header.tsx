import { Flex, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

export function Header() {
	const router = useRouter();

	const isHome = router.asPath === '/';

	return (
		<Flex as="header" justify="center" h="100px">
			<Flex align="center" flex="1" maxW="1160px" py="6">
				{!isHome && <Icon as={FiChevronLeft} boxSize="8" />}

				<Link href="/" passHref>
					<Image
						src="assets/logo.png"
						alt="Logo"
						mx="auto"
						h="100%"
						_hover={{ cursor: 'pointer' }}
					/>
				</Link>
			</Flex>
		</Flex>
	);
}
