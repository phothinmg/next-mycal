import type { Metadata } from "next";
import React from "react";
import JulianConverter from "./converter";
import styles from "./converter.module.css";
//
export const metadata: Metadata = {
	title: "Julian Date Converter",
};

export default function Converter() {
	return (
		<section className={styles.condev}>
			<JulianConverter />
		</section>
	);
}
