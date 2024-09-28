import type { Metadata } from "next";
import React from "react";
import JulianConverter from "./converter";
import styles from "./converter.module.css";
import JulianDateTime from "./test";
//

const serverTime = new Date().toISOString();
//
export const metadata: Metadata = {
  title: "Julian Date Converter",
};

const Converter: React.FC = () => {
  return (
    <section className={styles.condev}>
      <JulianDateTime />
    </section>
  );
};
export default Converter;
