"use client";
import React from "react";
import { useState } from "react";
import { fullMoonYear } from "../index";
import Link from "next/link";

export default function FullMoonYear() {
  const year: number = new Date().getFullYear();
  const [y, setYearValue] = useState<number>(year);
  const ya = y - 1;
  const yb = y + 1;
  const str: string[] = fullMoonYear(y);
  const strA: string[] = fullMoonYear(ya);
  const strB: string[] = fullMoonYear(yb);
  return (
    <div>
      <h3>Full Moon Days</h3>
      <hr />
      <small>Enter Year</small>
      <br />
      <input
        type="number"
        name="y"
        id="y"
        value={y}
        min={2001}
        max={2100}
        onChange={(e) => setYearValue(Number(e.target.value))}
      />
      <hr />
      <pre>
        {strA.slice(-6).join("\n")}
        <div style={{ fontWeight: 900 }}>{str.join("\n")}</div>
        {strB.slice(0, 6).join("\n")}
      </pre>
      <hr />
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
}
