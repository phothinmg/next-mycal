import dynamic from "next/dynamic";
import type React from "react";

const MoonAgeNoSSR = dynamic(() => import("./moon_age"), {
	ssr: false,
});

const MoonAge: React.FC = () => {
	return (
		<>
			<MoonAgeNoSSR />
		</>
	);
};

export default MoonAge;
