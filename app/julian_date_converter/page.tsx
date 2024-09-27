import React from "react";
import type { Metadata } from "next";
import styles from "./converter.module.css";
import JulianConverter from "./converter";
//
export const metadata: Metadata = {
  title: "Julian Date Converter",
};

export default function Converter() {
  return (
    <section className={styles.condev}>
      <JulianConverter />
    </section>
  );
}
