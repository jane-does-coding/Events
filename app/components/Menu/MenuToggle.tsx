"use client";
import React from "react";

export const MenuToggle = ({ isOpen, toggle }: any) => (
	<button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>
);
