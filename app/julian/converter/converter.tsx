"use client";
import MyMoon from "@/app";
import type { CalendarTypes } from "@/app";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
//

const JulianDateConverter: React.FC = () => {
	const _jdc = new MyMoon();
	const [ct, setCtValue] = useState<CalendarTypes | string>("Gregorian");
	const [jd, setJdValue] = useState<number>(_jdc.jdnow());
	const dts = MyMoon.jd2DateTime(jd, _jdc.tz, ct as CalendarTypes).string;
	return (
		<div>
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
				name="jd"
				id="jd"
				value={jd}
				onChange={(e) => setJdValue(Number(e.target.value))}
			/>
			<hr />
			<small>Date Time at UTC</small>
			<p id="dts">{dts}</p>
			<hr />
			<Link href={"/"}>Back to Home</Link>
		</div>
	);
};
export default JulianDateConverter;
