"use client";
import MyMoon from "@/app";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function FullMoonYear() {
	const _fm = new MyMoon();
	const year: number = _fm.year;
	const [y, setYearValue] = useState<number>(year);
	const ya = y - 1;
	const yb = y + 1;
	const str: string[] = MyMoon.fullMoonDays(y);
	const strA: string[] = MyMoon.fullMoonDays(ya);
	const strB: string[] = MyMoon.fullMoonDays(yb);
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
