import prisma from "@/app/libs/prismadb";

interface IParams {
	eventId: string;
}

export default async function getEventById(params: IParams) {
	try {
		const { eventId } = params;

		if (!eventId) return;

		const recipe = await prisma.event.findUnique({
			where: {
				id: eventId,
			},
			include: {
				user: true,
			},
		});

		if (!recipe) return null;

		return recipe;
	} catch (err) {
		console.log(err);
	}
}
