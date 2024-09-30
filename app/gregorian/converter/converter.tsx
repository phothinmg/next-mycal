"use client";
import React from "react";
import { useState } from "react";
import { type CalendarTypes, dt2j, j2d, jdnow } from "../../index";
import Link from "next/link";
//
export default function JulianConverter() {
	const jdNow = jdnow();
	const dtNow = j2d(jdNow);
	const [ct, setCtValue] = useState<CalendarTypes | string>("Gregorian");
	const [year, setYearValue] = useState<number>(dtNow.year);
	const [month, setMonthValue] = useState<number>(dtNow.month);
	const [date, setDateValue] = useState<number>(dtNow.day);
	const [hour, setHourValue] = useState<number>(dtNow.hour);
	const [minute, setMinuteValue] = useState<number>(dtNow.minute);
	const [second, setSecondValue] = useState<number>(dtNow.second);
	const julian: {
		jd: number;
		jdn: number;
	} = dt2j(year, month, date, hour, minute, second, ct as CalendarTypes);
	const jd: number = julian.jd;
	const jdn: number = julian.jdn;
	//

	return (
		<div>
			<h3>Date Time To Julian Date Converter</h3>
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
			<small>Julian Date (jd)</small>
			<p id="jd">{jd}</p>
			<small>Julian Day Number (jdn)</small>
			<p id="jdn">{jdn}</p>
			<hr />
			<Link href={"/"}>Back to Home</Link>
		</div>
	);
}
