import React from "react";
import type { Metadata } from "next";
import DateTimeToJulian from "./datetime_to_julian";
import styles from "./converter.module.css";
import JulianToDateTime from "./julian_to_datetime";
import JulianConverter from "./converter";
import ReactSocialIcon from "jsx-social-icons/react";
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
