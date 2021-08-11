import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
	name: string;
	imageUrl: string;
}

export function ContinentBanner({ name, imageUrl }: ContinentBannerProps) {
	return (
		<Flex
			h="500px"
			w="100%"
			bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imageUrl}')`}
			bgPos="center"
			align="flex-end"
		>
			<Heading
				as="h1"
				size="2xl"
				fontWeight="semibold"
				color="light.headingsAndText"
				w="100%"
				maxW="1160px"
				mx="auto"
				mb="16"
			>
				{name}
			</Heading>
		</Flex>
	);
}
