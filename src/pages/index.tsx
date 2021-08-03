import { Banner, CallToAction, ContinentsSlider, Divider, TravelTypes } from '../components/Home';

export default function Home() {
	return (
		<>
			<Banner />
			<TravelTypes />
			<Divider />
			<CallToAction />
			<ContinentsSlider />
		</>
	);
}
