import NavBar from "@/app/components/Nav";
import PostComponent from "@/app/components/post-component/posts";
import type { Metadata } from "next";
import type React from "react";
import { memo } from "react";

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
