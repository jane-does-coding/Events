import getEvents from "./actions/getEvents";
import Landing from "./components/Landing";

export default async function Home() {
	const events = await getEvents();
	console.log(events);

	return (
		<div className="">
			<Landing />
		</div>
	);
}
