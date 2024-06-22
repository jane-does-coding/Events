import React from "react";
import AnimatedTextCharacter from "./Text/AnimatedTextCharacter";
import AnimatedTextWord from "./Text/AnimatedTextWord";
import EventsGrid from "./Main/EventsGrid";

const Landing = () => {
	return (
		<div>
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
};

export default Landing;
