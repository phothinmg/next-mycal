import type { Metadata } from "next";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import NavBar from "../../components/nav";
const JulianConverterNoSSR = dynamic(() => import("./converter"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Julian Converter",
  description: "Online Julian Date to Date Time",
  authors: [{ name: "Pho Thin Maung", url: "https://github.com/phothinmg" }],
};

const JulianConverter: React.FC = memo(function JulianConverter() {
  return (
    <>
      <NavBar />
      <JulianConverterNoSSR />
    </>
  );
});

export default JulianConverter;
