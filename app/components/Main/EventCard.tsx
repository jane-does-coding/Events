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
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js router
import AnimatedTextWord from "../Text/AnimatedTextWord";
import { MdLocationOn } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Calendar } from "@/components/ui/calendar";
import QRCodeStyling from "qr-code-styling"; // Import QRCodeStyling library

// Define interfaces for props and event object
interface Event {
	id: string;
	title: string;
	date: string;
	oneline: string;
	description: string;
	location: string;
	email: string;
	phone: string;
}

interface EventCardProps {
	event: Event;
}

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.06,
			duration: 0.5,
		},
	}),
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const eventDate = new Date(event.date);

	const cardRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);

	const cardInView = useInView(cardRef, { once: true });
	const headerInView = useInView(headerRef, { once: true });
	const contentInView = useInView(contentRef, { once: true });
	const footerInView = useInView(footerRef, { once: true });

	const [openDetailedView, setOpenDetailedView] = useState(false);
	const [qrPopupOpen, setQrPopupOpen] = useState(false);
	const [qrCodeInstance, setQRCodeInstance] = useState<QRCodeStyling | null>(
		null
	);

	const router = useRouter();

	useEffect(() => {
		if (qrPopupOpen) {
			const qrCode = new QRCodeStyling({
				width: 300,
				height: 300,
				backgroundOptions: {
					color: "transparent",
				},
				dotsOptions: {
					type: "classy-rounded",
				},
				data: `${window.location.origin}/events/${event.id}`,
				imageOptions: {
					crossOrigin: "anonymous",
					margin: 20,
				},
			});

			setQRCodeInstance(qrCode);
		}
	}, [qrPopupOpen, event.id]);

	const toggleDetailedView = () => {
		setOpenDetailedView(!openDetailedView);
	};

	const toggleQrPopup = () => {
		setQrPopupOpen(!qrPopupOpen);
	};

	const openSharePopup = () => {
		toggleQrPopup();
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
					custom={0 as number} // Explicitly type custom prop
					variants={fadeInVariant}
				>
					<CardHeader>
						<motion.div
							initial="hidden"
							animate={headerInView ? "visible" : "hidden"}
							custom={1 as number} // Explicitly type custom prop
							variants={fadeInVariant}
						>
							<CardTitle>{event.title}</CardTitle>
						</motion.div>
						<motion.div
							initial="hidden"
							animate={headerInView ? "visible" : "hidden"}
							custom={2 as number} // Explicitly type custom prop
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
					custom={3 as number} // Explicitly type custom prop
					variants={fadeInVariant}
				></motion.div>

				<motion.div
					ref={footerRef}
					initial="hidden"
					animate={footerInView ? "visible" : "hidden"}
					custom={4 as number} // Explicitly type custom prop
					variants={fadeInVariant}
				>
					<CardFooter className="flex justify-between">
						<motion.div
							initial="hidden"
							animate={footerInView ? "visible" : "hidden"}
							custom={5 as number} // Explicitly type custom prop
							variants={fadeInVariant}
						></motion.div>
						<motion.div
							initial="hidden"
							animate={footerInView ? "visible" : "hidden"}
							custom={6 as number} // Explicitly type custom prop
							variants={fadeInVariant}
							className="flex gap-4 items-center w-full"
						>
							<Button
								variant="outline"
								className="w-full"
								onClick={openSharePopup}
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

			{qrPopupOpen && qrCodeInstance && (
				<div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-neutral-950/25 backdrop-blur-sm z-[999]">
					<div className="bg-neutral-200 p-8 rounded-xl relative max-w-[90vw] max-h-[90vh] overflow-auto">
						<button
							className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
							onClick={toggleQrPopup}
						>
							<MdOutlineClose size={28} />
						</button>
						<div
							className="bg-transparent"
							ref={(node) => qrCodeInstance.append(node)}
						/>
					</div>
				</div>
			)}

			{openDetailedView && (
				<div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-neutral-950/25 backdrop-blur-sm z-[999]">
					<div className="w-full md:w-[50vw] bg-neutral-800 rounded-xl py-8 relative overflow-auto max-h-[90vw]">
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
							<div className="flex flex-col xl:flex-row items-center justify-center px-4">
								<div className="flex flex-col w-1/2">
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
								<Calendar
									mode="single"
									selected={eventDate}
									className="rounded-md border w-1/2"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default EventCard;
