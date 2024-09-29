import type { Metadata } from "next";
import React from "react";
import JulianConverter from "./converter";
import styles from "./converter.module.css";
import JulianDateTime from "./test";
import dynamic from "next/dynamic";
const JulianNoSSR = dynamic(() => import("./test"), { ssr: false });
//

const serverTime = new Date().toISOString();
//
export const metadata: Metadata = {
  title: "Julian Date Converter",
};

const Converter: React.FC = () => {
  return (
    <section className={styles.condev}>
      <JulianNoSSR />
    </section>
  );
};
export default Converter;
