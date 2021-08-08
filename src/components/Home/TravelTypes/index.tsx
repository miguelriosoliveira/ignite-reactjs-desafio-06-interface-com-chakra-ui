import { Flex, FlexProps, Image } from '@chakra-ui/react';

import { TravelType } from './TravelType';

type TravelTypesProps = FlexProps;

export function TravelTypes(props: TravelTypesProps) {
	return (
		<Flex {...props} maxW="1160px" mx="auto" px="8" justify="space-between">
			<TravelType
				image={<Image src="assets/travel_types/cocktail.png" alt="Cocktail" />}
				caption="night life"
			/>
			<TravelType
				image={<Image src="assets/travel_types/beach.png" alt="Beach" />}
				caption="beach"
			/>
			<TravelType
				image={<Image src="assets/travel_types/building.png" alt="Building" />}
				caption="modern"
			/>
			<TravelType
				image={<Image src="assets/travel_types/museum.png" alt="Museum" />}
				caption="classic"
			/>
			<TravelType
				image={<Image src="assets/travel_types/earth.png" alt="Earth" />}
				caption="and more..."
			/>
		</Flex>
	);
}
