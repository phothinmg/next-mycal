import React from "react";
import dynamic from "next/dynamic";

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
