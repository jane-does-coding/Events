import React from "react";
import EventCard from "./EventCard";

const EventsGrid = ({ events }: any) => {
	return (
		<div className="grid grid-cols-3 w-[90vw] mx-auto py-8 gap-6">
			{events.map((event: any, i: number) => (
				<EventCard event={event} key={i} />
			))}
		</div>
	);
};

export default EventsGrid;
