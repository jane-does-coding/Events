import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useEventModal from "@/app/hooks/useEventModal";

const UserMenu = ({ currentUser }: { currentUser?: User | null }) => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const eventModal = useEventModal();
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen((value) => !value);
	};

	// Variants for staggered animation
	const menuItemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1, // Delay before each item starts animating
				duration: 0.3, // Animation duration
			},
		},
	};

	return (
		<div className="relative text-black">
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="flex flex-row items-center gap-3"
			>
				<motion.div
					className="p-4 transition flex flex-row items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-900/50 text-white bg-neutral-800/75"
					onClick={toggleOpen}
					whileHover={{ scale: 1.1 }}
				>
					<AiOutlineMenu size={28} />
				</motion.div>
			</motion.div>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					className="absolute shadow-lg rounded-xl border-[1.5px] border-neutral-900/50 border-t-neutral-900 w-[40vw] md:w-[20vw] bg-neutral-800/75 overflow-hidden right-0 top-14 text-sm"
				>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={menuItemVariants}
						className="flex flex-col cursor-pointer"
					>
						{currentUser ? (
							<>
								<MenuItem onClick={() => router.push("/")} label="Home" />
								<MenuItem onClick={eventModal.onOpen} label="Create Event" />
								<MenuItem onClick={() => signOut()} label="Logout" />
							</>
						) : (
							<>
								<MenuItem onClick={() => router.push("/")} label="Home" />
								<MenuItem onClick={loginModal.onOpen} label="Login" />
								<MenuItem onClick={registerModal.onOpen} label="Signup" />
							</>
						)}
					</motion.div>
				</motion.div>
			)}
		</div>
	);
};

export default UserMenu;
