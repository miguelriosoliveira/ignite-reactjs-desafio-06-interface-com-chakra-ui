import { Box } from '@chakra-ui/react';

interface BioProps {
	description: string;
	numberOfCountries: number;
	numberOfLanguages: number;
	numberOfCitiesInTop100: number;
}

export function Bio({
	description,
	numberOfCountries,
	numberOfLanguages,
	numberOfCitiesInTop100,
}: BioProps) {
	return <Box>Bio</Box>;
}
