"use client";
import { motion } from "framer-motion";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

interface NavbarProps {
	currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
	return (
		<motion.nav
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.3 }}
			className="fixed top-8 right-8 w-fit bg-neutral-800 rounded-full z-10"
		>
			<div className="flex">
				<UserMenu currentUser={currentUser} />
			</div>
		</motion.nav>
	);
};

export default Navbar;
