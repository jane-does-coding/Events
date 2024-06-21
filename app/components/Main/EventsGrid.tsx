import React from "react";
import EventCard from "./EventCard";

const EventsGrid = () => {
	return (
		<div className="grid grid-cols-3 w-[90vw] mx-auto py-8 gap-6">
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
		</div>
	);
};

export default EventsGrid;
