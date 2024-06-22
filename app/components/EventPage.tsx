"use client";
import { MdOutlineClose } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import AnimatedTextWord from "./Text/AnimatedTextWord";
import { Calendar } from "@/components/ui/calendar";

const EventPage = ({ event, onClose }: any) => {
	const router = useRouter();

	return (
		<div className="w-full h-screen bg-neutral-950/25 backdrop-blur-sm items-center justify-center fixed top-0 left-0 z-[999] flex">
			<div className="w-full md:w-[50vw] bg-neutral-800 rounded-xl py-8 relative overflow-auto max-h-[90vw]">
				<h1 className="random-font2 text-[2rem] w-full mx-auto text-center pb-6 border-b-2 border-b-neutral-900 items-center justify-center flex relative">
					{event.title}
				</h1>
				<div className="px-6">
					<AnimatedTextWord
						text={event.oneline}
						className="py-2 px-4 my-4 bg-gradient-to-r from-neutral-700/75 to-neutral-800/50 border-l-4 border-neutral-600 text-[1.15rem]"
					/>
					<p className="text-neutral-200">{event.description}</p>
					<div className="flex flex-col xl:flex-row items-center justify-center px-4">
						<div className="flex flex-col w-1/2">
							<div className={`my-4 flex gap-2 items-center`}>
								<MdLocationOn size={28} />
								<p>{event.location}</p>
							</div>
							<div className={`my-4 flex gap-2 items-center`}>
								<TbBrandGmail size={28} />
								<p>{event.email}</p>
							</div>
							<div className={`my-4 flex gap-2 items-center`}>
								<FaPhoneAlt size={28} />
								<p>{event.phone}</p>
							</div>
						</div>
						<Calendar
							mode="single"
							selected={new Date(event.date)}
							className="rounded-md border w-1/2"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventPage;
