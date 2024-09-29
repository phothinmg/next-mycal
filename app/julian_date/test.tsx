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
  const dts = julianToDateTime(jd, ct as CalendarTypes);
  return (
    <div className={styles.converter}>
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
        onChange={(e) => setJdValue(Number(e.target.value))}
      />
      <hr />
      <small>Date Time at UTC</small>
      <p id="dts">{dts}</p>
      <hr />
    </div>
  );
};
export default JulianDateTime;
