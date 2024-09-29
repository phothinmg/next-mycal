import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
const JulianNoSSR = dynamic(() => import("./converter"), { ssr: false });
//

export const metadata: Metadata = {
  title: "Julian Date Converter",
};

const JConverter: React.FC = () => {
  return (
    <section>
      <JulianNoSSR />
    </section>
  );
};
export default JConverter;
