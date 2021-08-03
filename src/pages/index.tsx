import { Banner, CallToAction, ContinentsSlider, Divider, TravelTypes } from '../components/Home';

export default function Home() {
	return (
		<>
			<Banner />
			<TravelTypes my="20" />
			<Divider />
			<CallToAction my="14" />
			<ContinentsSlider />
		</>
	);
}
