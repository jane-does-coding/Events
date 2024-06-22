"use client";
import { motion } from "framer-motion";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const links = [
	"https://example.com/page1",
	"https://example.com/page2",
	"https://example.com/page3",
	"https://example.com/page4",
	"https://example.com/page5",
];

export const MenuItem = ({ i }: any) => {
	const style = { border: `2px solid ${colors[i]}` };
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<a href={links[i]} style={{ textDecoration: "none", color: "black" }}>
				<div className="icon-placeholder" style={style} />
				<div className="text-placeholder" style={style} />
				Page {i + 1}
			</a>
		</motion.li>
	);
};
