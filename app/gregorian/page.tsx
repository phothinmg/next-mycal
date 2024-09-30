import type { Metadata } from "next";
import type React from "react";
import { memo } from "react";
import NavBar from "../components/nav";
import PostComponent from "../components/post-component/posts";

//

export const metadata: Metadata = {
	title: "Gregorian",
};

const Gregorian: React.FC = memo(function Gregorian() {
	return (
		<section>
			<NavBar />
			<PostComponent filePath="gregorian.md" />
		</section>
	);
});

export default Gregorian;
