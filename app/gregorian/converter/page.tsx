import type { Metadata } from "next";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import NavBar from "../../components/nav";
const GregorianConverterNoSSR = dynamic(() => import("./converter"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Julian Converter",
  description: "Online  Date Time to Julian Date and Julian Day Number ",
  authors: [{ name: "Pho Thin Maung", url: "https://github.com/phothinmg" }],
};

const GregorianConverter: React.FC = memo(function GregorianConverter() {
  return (
    <>
      <NavBar />
      <GregorianConverterNoSSR />
    </>
  );
});

export default GregorianConverter;
