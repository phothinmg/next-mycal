import dynamic from "next/dynamic";
import type React from "react";

const FullMoonNoSSR = dynamic(() => import("./full_moon"), {
	ssr: false,
});

const Moon: React.FC = () => {
	return (
		<>
			<FullMoonNoSSR />
		</>
	);
};

export default Moon;
