"use client";
import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions"; // Ensure this is imported correctly
import { MenuToggle } from "./MenuToggle"; // Ensure this is imported correctly
import "./menu.css"; // Make sure this path is correct
import { Navigation } from "./Nevigation";

// Sidebar animation variants
const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const Menu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
			className="menu-container"
		>
			<motion.div className="background" variants={sidebar} />
			<Navigation />
			<MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
		</motion.nav>
	);
};

export default Menu;
