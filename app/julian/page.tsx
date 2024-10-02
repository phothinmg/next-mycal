import type { Metadata } from "next";
import type React from "react";
import { memo } from "react";
import NavBar from "../components/Nav";
import PostComponent from "../components/post-component/posts";

//

export const metadata: Metadata = {
	title: "Gregorian",
};

const Julian: React.FC = memo(function Julian() {
	return (
		<section>
			<NavBar />
			<PostComponent filePath="julian.md" />
		</section>
	);
});

export default Julian;
