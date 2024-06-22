import getEvents from "./actions/getEvents";
import Landing from "./components/Landing";

export default async function Home() {
	const events = await getEvents();

	return (
		<div className="min-h-screen bg-gradient-to-tr from-neutral-900 via-indigo-400/50 to-indigo-300/75">
			<Landing events={events} />
		</div>
	);
}
