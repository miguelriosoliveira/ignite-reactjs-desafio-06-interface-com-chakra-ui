import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
	return (
		<Flex justify="center" bgImage="assets/background.png" bgSize="cover">
			<Flex align="center" flex="1" maxW="1160px">
				<Box p="8">
					<Heading fontWeight="500" color="light.headingsAndText">
						5 Continents, infinite possibilities.
					</Heading>
					<Text color="light.info">
						The time has come to take the trip you have always dreamed of off the drawing board.
					</Text>
				</Box>

				<Image
					src="assets/airplane.png"
					alt="Airplane"
					ml="auto"
					mr="4"
					w="417px"
					h="270px"
					transform="rotate(3deg) translateY(30px)"
				/>
			</Flex>
		</Flex>
	);
}
