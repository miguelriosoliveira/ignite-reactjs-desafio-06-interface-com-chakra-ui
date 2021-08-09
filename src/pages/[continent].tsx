import { GetStaticProps } from 'next';

import { api } from '../services/api';

interface ContinentProps {
	id: string;
	name: string;
	description: string;
	number_of_countries: number;
	number_of_languages: number;
	number_of_cities_in_top_100: number;
}

export default function Continent({
	id,
	name,
	description,
	number_of_countries,
	number_of_languages,
	number_of_cities_in_top_100,
}: ContinentProps) {
	return <h1>{name}</h1>;
}

type Params = {
	continent: string;
};

export const getStaticProps: GetStaticProps<ContinentProps, Params> = async ({ params }) => {
	const { continent } = params;
	let continentData: ContinentProps = null;

	try {
		const { data } = await api.get<ContinentProps>(`/continents/${continent}`);
		continentData = data;
	} catch (error) {
		console.error('Failed getting continent data.', error);
		return { notFound: true };
	}

	return {
		props: continentData,
		revalidate: 30 * 24 * 60 * 60 * 1000,
	};
};
