import { substituteHoliday } from "./add";
import { gregorianHolidays } from "./gholidays";
import { mmHolidays } from "./myanmar";
import { thingyanHolidays } from "./thingyan";
type HolidayParams = {
	/**
	 * Julian Day Number
	 */
	jdn: number;
	/**
	 * Gregorian Calendar Year
	 */
	year: number;
	/**
	 * Gregorian Calendar Month
	 */
	month: number;
	/**
	 * Gregorian Calendar Day
	 */
	day: number;
	/**
	 * Moon Phase
	 */
	mp: number;
	/**
	 * Myanmar Year
	 */
	my: number;
	/**
	 * Myanmar Month
	 */
	mm: number;
	/**
	 * Myanmar day
	 */
	md: number;
	/**
	 * Myanmar Month Type
	 */
	mmt: number;
	/**
	 * String array to collect holidays
	 */
	hs: string[];
};
/**
 * **Get All Public HoliDays**
 * @param {HolidayParams}
 */
export function holidays({
	jdn,
	year,
	month,
	day,
	mp,
	mmt,
	my,
	mm,
	md,
	hs,
}: HolidayParams): void {
	gregorianHolidays(year, month, day, hs);
	substituteHoliday(jdn, hs);
	thingyanHolidays(jdn, my, mmt, hs);
	mmHolidays(my, mm, md, mp, hs);
}
