import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
const GregorianNoSSR = dynamic(() => import("./converter"), { ssr: false });
//

export const metadata: Metadata = {
  title: "Gregorian",
};

const GConverter: React.FC = () => {
  return (
    <section>
      <GregorianNoSSR />
    </section>
  );
};
export default GConverter;
