"use client";
import MyMoon from "@/app";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
const Moon = () => {
	const _moon = new MyMoon();
	// set GMT+06:30
	_moon.tz = 6.5;
	const [ma, setMaValue] = useState<number>(_moon.moonAge());
	useEffect(() => {
		const intervalId = setInterval(() => {
			setMaValue(_moon.moonAge());
		}, 180000);
		return () => clearInterval(intervalId);
	}, [_moon]);
	return (
		<div>
			<table>
				<caption>Moon Age (+06:30GMT Myanmar Time)</caption>
				<tbody>
					<tr>
						<td>Moon Age</td>
						<td>{ma.toFixed(10)}</td>
					</tr>
					<tr>
						<td>Previous New Moon</td>
						<td>{_moon.previousNM}</td>
					</tr>
					<tr>
						<td>Full Moon</td>
						<td>{_moon.FM}</td>
					</tr>
					<tr>
						<td>Next New Moon</td>
						<td>{_moon.nextNM}</td>
					</tr>
				</tbody>
			</table>
			<hr />
			<Link href={"/"}>Back to Home</Link>
		</div>
	);
};

export default Moon;
