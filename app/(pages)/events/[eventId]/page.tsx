import getEventById from "@/app/actions/getEventById";
import EventPage from "@/app/components/EventPage";
import React from "react";

const page = async (props: any) => {
	const { params } = props;
	const event = await getEventById(params);

	console.log(event);

	return (
		<div>
			<EventPage event={event} />
		</div>
	);
};

export default page;
