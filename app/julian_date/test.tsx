"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  dateTimeToJulian,
  type CalendarTypes,
  julianToDateTime,
} from "./index";
import styles from "./converter.module.css";

function jdnow() {
  const ut = new Date().getTime() / 1000;
  //   const utcSe = Date.parse(utcStr) / 1000;
  const jd = 2440587.5 + ut / 86400.0;
  return jd;
}
const JulianDateTime: React.FC = () => {
  const [ct, setCtValue] = useState<CalendarTypes | string>("Gregorian");

  const [jd, setJdValue] = useState<number>(jdnow());
  const [dts, setDtsValue] = useState<string>(
    julianToDateTime(jd, ct as CalendarTypes)
  );
  // handle jd change
  const handleJdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newJd = Number(e.target.value);
    setJdValue(newJd);
    const dts = julianToDateTime(newJd, ct as CalendarTypes);
    setDtsValue(dts);
  };
  const handleCalendarTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCt = e.target.value;
    setCtValue(newCt);

    const dts = julianToDateTime(jd, newCt as CalendarTypes);
    setDtsValue(dts);
  };
  return (
    <div className={styles.converter}>
      <small>Select calendar type </small>
      <br />
      <select name="ct" id="ct" value={ct} onChange={handleCalendarTypeChange}>
        <option value="Gregorian">Gregorian</option>
        <option value="Julian">Julian</option>
        <option value="British">British</option>
      </select>
      <br />
      <br />
      <p>Julian Date to Date Time</p>
      <hr />
      <small>Enter Julian Date</small>
      <input
        className={styles.jd}
        name="jd"
        id="jd"
        value={jd}
        onChange={handleJdChange}
      />
      <hr />
      <small>Date Time at UTC</small>
      <p id="utc" suppressHydrationWarning={true}>
        {dts}
      </p>
      <hr />
    </div>
  );
};
export default JulianDateTime;

// export async function getServerSideProps() {
//   return {
//     props: {
//       serverTime: new Date().toISOString(), // Get the server time in ISO format
//     },
//   };
// }
