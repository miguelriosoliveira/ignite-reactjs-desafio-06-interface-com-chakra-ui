import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TravelTypeProps {
	image: ReactNode;
	caption: string;
}

export function TravelType({ image, caption }: TravelTypeProps) {
	return (
		<Box align="center">
			{image}
			<Text mt="6" fontWeight="600">
				{caption}
			</Text>
		</Box>
	);
}
