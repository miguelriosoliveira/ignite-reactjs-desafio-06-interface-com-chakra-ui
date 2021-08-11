import { Box } from '@chakra-ui/react';

export interface City {
	name: string;
	country: string;
	countryFlagUrl: string;
	imageUrl: string;
}

interface CitiesProps {
	top5: City[];
}

export function Cities({ top5 }: CitiesProps) {
	return <Box>Cities</Box>;
}
