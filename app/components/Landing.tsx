import React from "react";
import AnimatedTextCharacter from "./Text/AnimatedTextCharacter";
import AnimatedTextWord from "./Text/AnimatedTextWord";
import EventsGrid from "./Main/EventsGrid";

const Landing = ({ events }: any) => {
	console.log(events);
	return (
		<div>
			<AnimatedTextCharacter
				text="Find Events"
				className="text-white text-[6em] jura text-center mx-auto w-fit my-0 random-font2 pt-4"
			/>
			<AnimatedTextWord
				text="and connect with people"
				className="text-neutral-300 text-[2rem] jura text-center mx-auto w-fit my-0 random-font"
			/>

			<EventsGrid />
		</div>
	);
};

export default Landing;
