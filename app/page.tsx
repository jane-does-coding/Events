import EventsGrid from "./components/Main/EventsGrid";
import AnimatedTextCharacter from "./components/Text/AnimatedTextCharacter";
import AnimatedTextWord from "./components/Text/AnimatedTextWord";

export default function Home() {
	return (
		<div className="">
			<AnimatedTextCharacter
				text="Find Events"
				className="text-white text-[7em] jura text-center mx-auto w-fit my-0"
			/>
			<AnimatedTextWord
				text="and connect with people"
				className="text-neutral-300 text-[2rem] jura text-center mx-auto w-fit my-0"
			/>

			<EventsGrid />
		</div>
	);
}
