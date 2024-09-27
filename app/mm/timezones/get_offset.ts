import type { TimeZones } from "./tztype.ts";

export function get_offset(timeZone: TimeZones) {
	const now = new Date();
	const tzString = now.toLocaleString("en-US", { timeZone });
	const localString = now.toLocaleString("en-US");
	const diff = (Date.parse(localString) - Date.parse(tzString)) / 3600000;
	const offset = diff + now.getTimezoneOffset() / 60;

	return -offset;
}
