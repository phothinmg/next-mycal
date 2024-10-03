import NavBar from "@/app/components/Nav";
import PostComponent from "@/app/components/post-component/posts";
import type { Metadata } from "next";
import type React from "react";
import { memo } from "react";

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
