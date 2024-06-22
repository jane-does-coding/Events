import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getEvents() {
	try {
		const events = await prisma.event.findMany();

		return events;
	} catch (error) {
		console.error("Error fetching events:", error);
		return { message: "Internal Server Error" };
	}
}
