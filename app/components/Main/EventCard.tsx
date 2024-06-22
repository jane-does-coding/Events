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
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedTextWord from "../Text/AnimatedTextWord";
import { MdLocationOn } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

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

export default function EventCard({ event }: any) {
	const cardRef = useRef(null);
	const headerRef = useRef(null);
	const contentRef = useRef(null);
	const footerRef = useRef(null);

	const cardInView = useInView(cardRef, { once: true });
	const headerInView = useInView(headerRef, { once: true });
	const contentInView = useInView(contentRef, { once: true });
	const footerInView = useInView(footerRef, { once: true });

	const [openDetailedView, setOpenDetailedView] = useState(false); // Initialize detailed view closed

	const router = useRouter();

	const toggleDetailedView = () => {
		setOpenDetailedView(!openDetailedView);
	};

	return (
		<>
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
							<Button
								variant="outline"
								className="w-full"
								onClick={toggleDetailedView}
							>
								Share
							</Button>
							<Button
								className="w-full bg-indigo-200/[15%] border-2 border-indigo-300 text-white hover:bg-neutral-900/25"
								onClick={() => setOpenDetailedView(true)}
							>
								View
							</Button>
						</motion.div>
					</CardFooter>
				</motion.div>
			</Card>
			{/* OVERLAY */}
			<div
				className={`w-full h-screen bg-neutral-950/25 backdrop-blur-sm items-center justify-center fixed top-0 left-0 z-[999] ${
					openDetailedView ? "flex" : "hidden opacity-0"
				}`}
			>
				<div className="w-full md:w-[50vw] bg-neutral-800 rounded-xl py-8 relative">
					<h1 className="random-font2 text-[2rem] w-full mx-auto text-center pb-6 border-b-2 border-b-neutral-900 items-center justify-center flex relative">
						{event.title}
						<span
							className="text-white cursor-pointer absolute top-4 right-10"
							onClick={toggleDetailedView}
						>
							<MdOutlineClose size={28} />
						</span>
					</h1>
					<div className="px-6">
						<AnimatedTextWord
							text={event.oneline}
							className="py-2 px-4 my-4 bg-gradient-to-r from-neutral-700/75 to-neutral-800/50 border-l-4 border-neutral-600 text-[1.15rem]"
						/>
						<p className="text-neutral-200">{event.description}</p>
						<div
							className={`my-4 flex gap-2 items-center ${
								openDetailedView ? "" : "hidden"
							}`}
						>
							<MdLocationOn size={28} />
							<p>{event.location}</p>
						</div>
						<div
							className={`my-4 flex gap-2 items-center ${
								openDetailedView ? "" : "hidden"
							}`}
						>
							<TbBrandGmail size={28} />
							<p>{event.email}</p>
						</div>
						<div
							className={`my-4 flex gap-2 items-center ${
								openDetailedView ? "" : "hidden"
							}`}
						>
							<FaPhoneAlt size={28} />
							<p>{event.phone}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
