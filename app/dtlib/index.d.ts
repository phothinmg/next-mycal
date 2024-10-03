export type CalendarTypes = "British" | "Gregorian" | "Julian";
type MoonPhases = 0 | 0.25 | 0.5 | 0.75;
export type TimeZones =
	| "UTC+14:00"
	| "UTC+13:00"
	| "UTC+12:45"
	| "UTC+12:00"
	| "UTC+11:00"
	| "UTC+10:30"
	| "UTC+10:00"
	| "UTC+09:30"
	| "UTC+09:00"
	| "UTC+08:45"
	| "UTC+08:00"
	| "UTC+07:00"
	| "UTC+06:30"
	| "UTC+06:00"
	| "UTC+05:45"
	| "UTC+05:30"
	| "UTC+05:00"
	| "UTC+04:30"
	| "UTC+04:00"
	| "UTC+03:30"
	| "UTC+03:00"
	| "UTC+02:00"
	| "UTC+01:00"
	| "UTC+00:00"
	| "UTC-01:00"
	| "UTC-02:00"
	| "UTC-03:00"
	| "UTC-03:30"
	| "UTC-04:00"
	| "UTC-05:00"
	| "UTC-06:00"
	| "UTC-07:00"
	| "UTC-08:00"
	| "UTC-09:00"
	| "UTC-09:30"
	| "UTC-10:00"
	| "UTC-11:00"
	| "UTC-12:00";
type _TimeZ = {
	[key in TimeZones]: number;
};
type Languages = "English" | "Burmese";
export type DateObject = {
	/**
	 * Year
	 */
	year: number;
	/**
	 * Month
	 */
	month: string;
	/**
	 * date
	 */
	date: number;
	/**
	 * weekday long
	 */
	weekday_long: string;
	/**
	 * weekday short
	 */
	weekday_short: string;
	/**
	 * Julian Day Number
	 */
	jdn: number;
	/**
	 * Week day id
	 */
	wd_id: number;
	/**
	 * Month id
	 */
	month_id: number;
	/**
	 * Myanmar Calendar info
	 */
	mmcal: {
		/**
		 * Sasana Year BE
		 */
		sasana_year: string | number;
		/**
		 * Myanmar Year
		 */
		myanmar_year: string | number;
		/**
		 * Myanmar Month String
		 */
		myanmar_month: string;
		/**
		 * Moon Phase
		 */
		moon_phase: string;
		/**
		 * [1 - 15]
		 */
		fortnight_date: string | number;
		/**
		 * [1 - 30]
		 */
		myanmar_date: string | number;
		/**
		 * Yatyaza or Pyathada -
		 */
		yatyaza_pyathada: string | string[];
		/**
		 * Sabbath or eve
		 */
		sabbath: string;
		/**
		 * Dragon Head Direction
		 */
		nagahle: string;
		/**
		 * Mahabote
		 */
		mahabote: string;
		/**
		 * Nakhat
		 */
		nakhat: string;
		/**
		 * Astrological days array
		 */
		astro_days: string[];
		/**
		 * Public Holidays array
		 */
		public_holiday: string[];
	};
};
export type MonthObject = {
	/**
	 * id
	 */
	id: number;
	/**
	 * Year
	 */
	year: number;
	/**
	 * Gregorian Month Name , Long "January"
	 */
	month_long: string;
	/**
	 * Gregorian Month Name , Short "Jan"
	 */
	month_short: string;
	/**
	 * Sasana Year array
	 */
	sasana_years: string[] | number[];
	/**
	 * Myanmar Year array
	 */
	myanmar_years: string[] | number[];
	/**
	 * Myanmar Month Names Array
	 */
	myanmar_months: string[];
	/**
	 * DateObjects array
	 */
	date_object: Array<DateObject>;
};
export type YearObject = {
	/**
	 * Year
	 */
	year: number;
	/**
	 * Sasana Year array
	 */
	sasana_years: string[] | number[];
	/**
	 * Myanmar Year array
	 */
	myanmar_years: string[] | number[];
	/**
	 * MonthObjects array
	 */
	month_object: Array<MonthObject>;
};
export declare const TimeZ: _TimeZ;
export declare const timeZones: string[];
export declare class MyJulian {
	protected _ct: CalendarTypes;
	protected _tz: TimeZones;
	protected _jd: number;
	protected static _sg: number;
	constructor(jd?: number, tz?: TimeZones, ct?: CalendarTypes);
	/**
	 * Returns the secular difference between the Julian period and the Gregorian
	 * period, given a year.
	 * @param year The year for which to calculate the secular difference.
	 * @returns The secular difference between the Julian period and the Gregorian
	 * period, for the given year.
	 */
	static secularDiff(year: number): number;
	/**
	 * Convert a Unix timestamp (in seconds) to a Julian Date.
	 * @param unix Unix timestamp in seconds.
	 * @returns Julian Date.
	 */
	static unix2jd(unix: number): number;
	/**
	 * Convert a Julian Date to a Unix timestamp (in seconds).
	 * @param jd Julian Date.
	 * @returns Unix timestamp in seconds.
	 */
	static jd2unix(jd: number): number;
	/**
	 * Return the current UTC Julian Date.
	 * @returns The current UTC Julian Date.
	 */
	static jdutc(): number;
	/**
	 * Return the current Julian Date in Yangon, Myanmar.
	 * @returns The current Julian Date in Yangon, Myanmar.
	 */
	static jdmm(): number;
	/**
	 * Return the current Julian Date in the time zone of this instance.
	 * @returns The current Julian Date in the time zone of this instance.
	 */
	jdnow(): number;
	/**
	 * Convert a Julian Date to a date and time in a specific time zone.
	 * @param jd The Julian Date to convert.
	 * @param tz The time zone offset in hours to use for the conversion. If not
	 * provided, this defaults to 0 (UTC).
	 * @returns An object with the following properties: year, month, day, hour,
	 * minute, second.
	 */
	static jd2dt(
		jd: number,
		tz?: TimeZones,
	): {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	};
	/**
	 * Convert a Julian Day to a date-time object.
	 *
	 * @param jd The Julian Day to convert.
	 * @param tz The timezone offset in hours. Defaults to 0 (UTC).
	 * @param ct The calendar type. Defaults to "Gregorian".
	 * @returns An object with the following properties: year, month, date, hour, minute, second, and string.
	 * The string property is a string representation of the date and time in the format "Month Day, Year Hour:Minute:Second".
	 */
	static jd2DateTime(
		jd: number,
		tz?: TimeZones,
		ct?: CalendarTypes,
	): {
		year: number;
		month: number;
		date: number;
		hour: number;
		minute: number;
		second: number;
		string: string;
	};
	/**
	 * Convert a date-time object to a Julian Day Number.
	 *
	 * @param year The year of the date to convert.
	 * @param month The month of the date to convert.
	 * @param day The day of the date to convert.
	 * @param hour The hour of the date to convert. Defaults to 12.
	 * @param minute The minute of the date to convert. Defaults to 0.
	 * @param second The second of the date to convert. Defaults to 0.
	 * @param ct The calendar type. Defaults to "Gregorian".
	 * @returns An object with two properties: jd and jdn. The jd property is the Julian Day, and the jdn property is the Julian Day Number.
	 */
	static dateTime2Julian(
		year: number,
		month: number,
		day: number,
		hour: number,
		minute: number,
		second: number,
		ct: CalendarTypes,
	): {
		jd: number;
		jdn: number;
	};
	protected utcTime(): {
		year: number;
		month: number;
		date: number;
		hour: number;
		minute: number;
		second: number;
	};
	set jd(jd: number);
	get jd(): number;
	get jdn(): number;
	set tz(tz: TimeZones);
	get tz(): TimeZones;
	set ct(ct: CalendarTypes);
	get ct(): CalendarTypes;
	/**
	 * Gets the year of this date in the Gregorian calendar.
	 * @returns The year of this date in the Gregorian calendar.
	 */
	get year(): number;
	get month(): number;
	get date(): number;
	get hour(): number;
	get minute(): number;
	get second(): number;
	protected getwd(): {
		wdid: number;
		str: string;
	};
	get wd(): number;
	get wdstr(): string;
	get utcjdNow(): number;
	get mmjdNow(): number;
	get utcYear(): number;
	get utcMonth(): number;
	get utcDate(): number;
	get utcHour(): number;
	get utcMinute(): number;
	get utcSecond(): number;
}
export declare class MyMoon extends MyJulian {
	protected static mod360(f: number): number;
	static getCycle(year: number, month: number): number;
	protected static phaseDate(cycle: number, phase: MoonPhases): number;
	static calMoonPhases(
		year: number,
		month: number,
	): {
		new: number;
		fq: number;
		full: number;
		lq: number;
	};
	static fullMoonDays(year: number): string[];
	protected moon_age(): {
		l_m: number;
		man: number;
		pnmStr: string;
		nnmStr: string;
		fmStr: string;
	};
	moonAge(): number;
	get previousNM(): string;
	get nextNM(): string;
	get FM(): string;
}
export declare function astro(
	mm: number,
	md: number,
	wd: number,
	hs: string[],
): void;
export declare class MyCal extends MyMoon {
	private _lang;
	private _yearCal;
	private _monthCal;
	private _dateCal;
	private _cal;
	res(): DateObject | MonthObject | YearObject;
	calMontView(
		year: number,
		month: number,
		lang: Languages,
	): {
		ssys: string[] | number[];
		mys: string[] | number[];
		mo: MonthObject;
	};
	set yearForCalendar(year: number);
	get yearForCalendar(): number;
	set monthForCalendar(month: number);
	get monthForCalendar(): number;
	set dateForCalendar(date: number);
	get dateForCalendar(): number;
	set lang(lang: Languages);
	get lang(): Languages;
}
