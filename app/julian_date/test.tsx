"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  dateTimeToJulian,
  type CalendarTypes,
  julianToDateTime,
} from "./index";
import styles from "./converter.module.css";

interface JulianProps {
  serverTime: string;
}
const getUTC = (t: number) => {
  const dt: Date = new Date(t);
  const y: number = dt.getUTCFullYear();
  const mo: number = dt.getUTCMonth();
  const d: number = dt.getUTCDate();
  const hr: number = dt.getUTCHours();
  const mi: number = dt.getUTCMinutes();
  const s: number = dt.getUTCSeconds();
  return {
    y,
    mo,
    d,
    hr,
    mi,
    s,
  };
};
const dt2jd = (t: number, ct: CalendarTypes): number => {
  const dt = getUTC(t);
  const julian = dateTimeToJulian({
    year: dt.y,
    month: dt.mo + 1,
    day: dt.d,
    hour: dt.hr,
    minute: dt.mi,
    second: dt.s,
    calendarType: ct,
  });
  return julian.jd;
};

const JulianDateTime: React.FC<JulianProps> = ({ serverTime }) => {
  const [ct, setCtValue] = useState<CalendarTypes | string>("Gregorian");
  // get server time
  const [st, setStvalue] = useState<number>(new Date(serverTime).getTime());
  useEffect(() => {
    setStvalue(st);
  }, [serverTime]);
  const [jd, setJdValue] = useState<number>(dt2jd(st, ct as CalendarTypes));
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
