"use client";
import React from "react";
import { useState } from "react";
import {
  dateTimeToJulian,
  type CalendarTypes,
  julianToDateTime,
} from "./index";
import styles from "./converter.module.css";

export default function Jd2Dt() {
  const dt: Date = new Date();
  const utcYear: number = dt.getUTCFullYear();
  const utcMonth: number = dt.getUTCMonth() + 1;
  const utcdate: number = dt.getUTCDate();
  const utcHour: number = dt.getUTCHours();
  const utcMinute: number = dt.getUTCMinutes();
  const utcSecond: number = dt.getUTCSeconds();
  const [ct, setCtValue] = useState<CalendarTypes | string>("Gregorian");
  const julian: {
    jd: number;
    jdn: number;
  } = dateTimeToJulian({
    year: utcYear,
    month: utcMonth,
    day: utcdate,
    hour: utcHour,
    minute: utcMinute,
    second: utcSecond,
    calendarType: ct as CalendarTypes,
  });
  const jd: number = julian.jd;
  const [jdd, setJdValue] = useState<number>(jd);
  const dts = julianToDateTime(jdd, ct as CalendarTypes);
  return (
    <div className={styles.converter}>
      <h3>2. Julian Date to Date Time Converter</h3>
      <hr />
      <small>Select calendar type </small>
      <br />
      <select
        name="ct"
        id="ct"
        value={ct}
        onChange={(e) => setCtValue(e.target.value)}
      >
        <option value="Gregorian">Gregorian</option>
        <option value="Julian">Julian</option>
        <option value="British">British</option>
      </select>
      <hr />
      <small>Enter Julian Date</small>
      <input
        className={styles.jd}
        name="jdd"
        id="jdd"
        value={jdd}
        onChange={(e) => setJdValue(Number(e.target.value))}
      />
      <hr />
      <small>Date Time at UTC</small>
      <p id="utc" suppressHydrationWarning={true}>
        {dts}
      </p>
      <hr />
    </div>
  );
}
