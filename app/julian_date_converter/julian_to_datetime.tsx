"use client";
import React from "react";
import { useState } from "react";
import type { CalendarTypes } from "../mm/gre";
import styles from "./converter.module.css";
import { julianToDateTime } from "../mm/julian";
import { dateTimeToJulian } from "../mm/gre";
import { TimeZones } from "../mm/timezones/mod";
import { timeZones } from "./tz";

export default function JulianToDateTime() {
  const dt: Date = new Date();
  const utcYear: number = dt.getUTCFullYear();
  const utcMonth: number = dt.getUTCMonth() + 1;
  const utcdate: number = dt.getUTCDate();
  const utcHour: number = dt.getUTCHours();
  const utcMinute: number = dt.getUTCMinutes();
  const utcSecond: number = dt.getUTCSeconds();
  const jdd: number = dateTimeToJulian({
    year: utcYear,
    month: utcMonth,
    day: utcdate,
    hour: utcHour,
    minute: utcMinute,
    second: utcSecond,
  }).jd;
  const [ct, setCtValue] = useState<CalendarTypes | string>("Gregorian");
  const [tz, setTzValue] = useState<TimeZones | string>("GMT");
  const [jd, setJdValue] = useState<number>(jdd);
  const dts = julianToDateTime({
    jd: jd,
    ct: ct as CalendarTypes,
    tz: tz as TimeZones,
  });
  return (
    <div className={styles.converter}>
      <h4>Julian Date to Date Time</h4>
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
        name="jd"
        id="jd"
        value={jd}
        onChange={(e) => setJdValue(Number(e.target.value))}
      />
      <hr />
      <small>Date Time at UTC</small>
      <p id="utc" suppressHydrationWarning={true}>
        {dts.utcDateTime}
      </p>
      <small>Date Time at Local</small>
      <p id="local" suppressHydrationWarning={true}>
        {dts.localDateTime}
      </p>
      <hr />
      <small>Select Timezone</small>
      <br />
      <select
        name="tz"
        id="tz"
        value={tz}
        onChange={(e) => setTzValue(e.target.value)}
      >
        <option value="GMT">GMT</option>
        {timeZones.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <br />
      <small>Date Time at selected Timezone</small>
      <p id="custom" suppressHydrationWarning={true}>
        {dts.customDateTime}
      </p>
    </div>
  );
}
