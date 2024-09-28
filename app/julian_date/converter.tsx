"use client";
import React from "react";
import { useState } from "react";
import { dateTimeToJulian, type CalendarTypes } from "./index";
import styles from "./converter.module.css";
import Jd2Dt from "./JdToDt";
//
export default function JulianConverter() {
  const dt: Date = new Date();
  const utcYear: number = dt.getUTCFullYear();
  const utcMonth: number = dt.getUTCMonth() + 1;
  const utcdate: number = dt.getUTCDate();
  const utcHour: number = dt.getUTCHours();
  const utcMinute: number = dt.getUTCMinutes();
  const utcSecond: number = dt.getUTCSeconds();
  const [ct, setCtValue] = useState<CalendarTypes | string>("Gregorian");
  const [year, setYearValue] = useState<number>(utcYear);
  const [month, setMonthValue] = useState<number>(utcMonth);
  const [date, setDateValue] = useState<number>(utcdate);
  const [hour, setHourValue] = useState<number>(utcHour);
  const [minute, setMinuteValue] = useState<number>(utcMinute);
  const [second, setSecondValue] = useState<number>(utcSecond);
  const julian: {
    jd: number;
    jdn: number;
  } = dateTimeToJulian({
    year: year,
    month: month,
    day: date,
    hour: hour,
    minute: minute,
    second: second,
    calendarType: ct as CalendarTypes,
  });
  const jd: number = julian.jd;
  const jdn: number = julian.jdn;
  //

  return (
    <section className={styles.condev}>
      <div className={styles.converter}>
        <h3>1. Date Time To Julian Date Converter</h3>
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
        <small>Input date and time</small>
        <hr />
        <table>
          <tbody>
            <tr>
              <td>Year</td>
              <td>
                <input
                  className={styles.tinput}
                  min={-3000}
                  max={3000}
                  type="number"
                  name="year"
                  id="year"
                  value={year}
                  onChange={(e) => setYearValue(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Month</td>
              <td>
                <input
                  className={styles.tinput}
                  min={1}
                  max={12}
                  type="number"
                  name="month"
                  id="month"
                  value={month}
                  onChange={(e) => setMonthValue(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <input
                  className={styles.tinput}
                  min={1}
                  max={31}
                  type="number"
                  name="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDateValue(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Hour</td>
              <td>
                <input
                  className={styles.tinput}
                  min={0}
                  max={23}
                  type="number"
                  name="hour"
                  id="hour"
                  value={hour}
                  onChange={(e) => setHourValue(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Minute</td>
              <td>
                <input
                  className={styles.tinput}
                  min={0}
                  max={59}
                  type="number"
                  name="minute"
                  id="minute"
                  value={minute}
                  onChange={(e) => setMinuteValue(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Second</td>
              <td>
                <input
                  className={styles.tinput}
                  min={0}
                  max={59}
                  type="number"
                  name="second"
                  id="second"
                  value={second}
                  onChange={(e) => setSecondValue(Number(e.target.value))}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        {/* 
      https://nextjs.org/docs/messages/react-hydration-error#:~:text=Sometimes%20content%20will%20inevitably%20differ%20between%20the%20server%20and%20client%2C%20such%20as%20a%20timestamp.%20You%20can%20silence%20the%20hydration%20mismatch%20warning%20by%20adding%20suppressHydrationWarning%3D%7Btrue%7D%20to%20the%20element.
      Sometimes content will inevitably differ between the server and client, such as a timestamp. 
      You can silence the hydration mismatch warning by adding suppressHydrationWarning={true} 
      to the element.
       */}
        <small>Julian Date (jd)</small>
        <p id="jd" suppressHydrationWarning={true}>
          {jd}
        </p>
        <small>Julian Day Number (jdn)</small>
        <p id="jdn" suppressHydrationWarning={true}>
          {jdn}
        </p>
        <hr />
      </div>
      <Jd2Dt />
    </section>
  );
}
