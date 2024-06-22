"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: (index: any) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.06,
			duration: 0.5,
		},
	}),
};

const event = {
	id: 1,
	title: "Fitness lesson session wiht a group",
	oneline:
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, fugit!",
};

export default function EventCard({ event: finalEvent }: any) {
	const cardRef = useRef(null);
	const headerRef = useRef(null);
	const contentRef = useRef(null);
	const footerRef = useRef(null);

	const cardInView = useInView(cardRef, { once: true });
	const headerInView = useInView(headerRef, { once: true });
	const contentInView = useInView(contentRef, { once: true });
	const footerInView = useInView(footerRef, { once: true });

	const router = useRouter();

	return (
		<Card
			className="w-full bg-neutral-900/50 backdrop-blur-md shadow-lg"
			ref={cardRef}
		>
			<motion.div
				ref={headerRef}
				initial="hidden"
				animate={cardInView ? "visible" : "hidden"}
				custom={0}
				variants={fadeInVariant}
			>
				<CardHeader>
					<motion.div
						initial="hidden"
						animate={headerInView ? "visible" : "hidden"}
						custom={1}
						variants={fadeInVariant}
					>
						<CardTitle>{event.title}</CardTitle>
					</motion.div>
					<motion.div
						initial="hidden"
						animate={headerInView ? "visible" : "hidden"}
						custom={2}
						variants={fadeInVariant}
					>
						<CardDescription className="text-neutral-200">
							{event.oneline}
						</CardDescription>
					</motion.div>
				</CardHeader>
			</motion.div>

			<motion.div
				ref={contentRef}
				initial="hidden"
				animate={contentInView ? "visible" : "hidden"}
				custom={3}
				variants={fadeInVariant}
			></motion.div>

			<motion.div
				ref={footerRef}
				initial="hidden"
				animate={footerInView ? "visible" : "hidden"}
				custom={4}
				variants={fadeInVariant}
			>
				<CardFooter className="flex justify-between">
					<motion.div
						initial="hidden"
						animate={footerInView ? "visible" : "hidden"}
						custom={5}
						variants={fadeInVariant}
					></motion.div>
					<motion.div
						initial="hidden"
						animate={footerInView ? "visible" : "hidden"}
						custom={6}
						variants={fadeInVariant}
						className="flex gap-4 items-center w-full"
					>
						<Button variant="outline" className="w-full">
							Share
						</Button>
						<Button
							className="w-full bg-indigo-200/[15%] border-2 border-indigo-300 text-white hover:bg-neutral-900/25"
							onClick={() => router.push(`/events/${event.id}`)}
						>
							View
						</Button>
					</motion.div>
				</CardFooter>
			</motion.div>
		</Card>
	);
}
