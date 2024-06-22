import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	const body = await req.json();
	const { title, description, oneline, date } = body;

	try {
		// Check if the user exists
		const user = await getCurrentUser();

		if (!user) {
			return NextResponse.json({ error: "User not found" });
		}

		// Create the event
		const newEvent = await prisma.event.create({
			data: {
				title,
				description,
				oneline,
				date,
				userId: user.id,
			},
		});

		return NextResponse.json(newEvent);
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "Internal server error" });
	}
}
