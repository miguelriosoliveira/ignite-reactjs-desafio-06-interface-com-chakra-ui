import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

interface InfoNumberProps {
	number: number;
	text: string;
	info?: string;
}

export function InfoNumber({ number, text, info }: InfoNumberProps) {
	return (
		<Box textAlign="center">
			<Heading color="highlight" fontWeight="semibold" fontSize="5xl" lineHeight="72px">
				{number}
			</Heading>
			<Text fontWeight="semibold" fontSize="2xl">
				{text}
				{info && (
					<Icon as={FiInfo} w="4" h="4" color="dark.info" opacity={0.5} strokeWidth="3" ml="5px" />
				)}
			</Text>
		</Box>
	);
}
