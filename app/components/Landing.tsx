import React from "react";
import AnimatedTextCharacter from "./Text/AnimatedTextCharacter";
import AnimatedTextWord from "./Text/AnimatedTextWord";
import EventsGrid from "./Main/EventsGrid";
import { TbH1 } from "react-icons/tb";

const Landing = ({ events }: any) => {
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

			{events.length < 1 ? (
				<h1 className="mt-[10vh] mx-auto w-fit random-font text-white text-[2rem]">
					No events found
				</h1>
			) : (
				<EventsGrid events={events} />
			)}
		</div>
	);
};

export default Landing;
