// types
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
/**
 * Warhtat Exceptions
 */
type WarhtatExceptions = {
	zero: number[];
	one: number[];
};
/**
 * Types for output when checking Myanmar Year
 */
type CheckMmYear = {
	/**
	 * Burmese Year
	 */
	myt: number;
	/**
	 * TG1 JDN
	 */
	tg1: number;
	/**
	 * JDN for 2dnd warso fm
	 */
	fm: number;
	/** */
	err: number;
};
//
type BCC = {
	SY: number;
	MO: number;
	LM: number;
	WTE: WarhtatExceptions;
	FME: Array<number[]>;
	MC: Array<number[]>;
	/**
	 * Search  2nd warso full moon day exceptions
	 * @param my Myanmar Year
	 */
	searchFme(my: number): number;
	wh19(my: number): number;
	nmwo(my: number): {
		nm: number;
		wo: number;
	};
	ky(my: number): number;
	by(my: number): number;
	e3(my: number): boolean;
	e2(my: number): boolean;
	e13(my: number): boolean;
	e12(my: number): boolean;
	e11(my: number): boolean;
	ta(my: number): number;
	tw(my: number): number;
	ed(my: number): number;
	nyt(my: number): number;
	whEra(my: number): number;
	ser2ndws(my: number): number;
	checkMmYear(my: number): CheckMmYear;
	mmyl(myt: number): number;
	mml(myt: number, mm: number): number;
	mp(myt: number, mm: number, md: number): number;
	mf(md: number): number;
	md(mf: number, mp: number, mm: number, myt: number): number;
	j2m(jdn: number): {
		myt: number;
		my: number;
		mm: number;
		md: number;
	};
};
export type HolidayParams = {
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
type AstroParams = {
	my: number;
	mm: number;
	mml: number;
	md: number;
	wd: number;
};

export type Astro = {
	asd: (hs: string[]) => void;
	ypy: string | string[];
	sbd: string;
	ngl: string;
	mhb: string;
	nkt: string;
};
type Languages = "English" | "Burmese";
type Utils = {
	SG: number;
	UNIX: number;
	secularDiff(year: number): number;
	isLeapYear(year: number): boolean;
	monthsDaysArray(year: number): number[];
	uniqNumber(obj: number[]): number[];
	uniqString(obj: string[]): string[];
	Tnum(a: number, lang?: Languages): string | number;
	Tstr(
		str: string | string[],
		array: string[][],
		lang?: Languages,
	): string | string[];
	des2hms(des: number): {
		hour: number;
		minute: number;
		second: number;
	};
	hms2des(hour: number, minute: number, second: number): number;
};
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
//
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
export type JTM = {
	/**
	 * Myanmar Year Types
	 */
	myt: number;
	/**
	 * Sasana Year
	 */
	ssy: number;
	/**
	 * Myanmar Year
	 */
	my: number;
	/**
	 * Myanmar Month
	 */
	mm: number;
	/**
	 * Myanmar Month String
	 */
	mm_str: string;
	/**
	 * Myanmar Month Type
	 */
	mmt: number;
	/**
	 * Myanmar Month Length
	 */
	mml: number;
	/**
	 * Myanmar Day
	 */
	md: number;
	/**
	 * Fortnight Day
	 */
	mf: number;
	/**
	 * Week Day
	 */
	wd: number;
	/**
	 * Moon Phase
	 */
	mp: number;
	/**
	 * Moon Phase String
	 */
	mp_str: string;
};

//
// ----------------- Lists
export const TimeZ: _TimeZ = {
	"UTC+14:00": 14,
	"UTC+13:00": 13,
	"UTC+12:45": 12.75,
	"UTC+12:00": 12,
	"UTC+11:00": 11,
	"UTC+10:30": 10.5,
	"UTC+10:00": 10,
	"UTC+09:30": 9.5,
	"UTC+09:00": 9,
	"UTC+08:45": 8.75,
	"UTC+08:00": 8,
	"UTC+07:00": 7,
	"UTC+06:30": 6.5,
	"UTC+06:00": 6,
	"UTC+05:45": 5.75,
	"UTC+05:30": 5.5,
	"UTC+05:00": 5,
	"UTC+04:30": 4.5,
	"UTC+04:00": 4,
	"UTC+03:30": 3.5,
	"UTC+03:00": 3,
	"UTC+02:00": 2,
	"UTC+01:00": 1,
	"UTC+00:00": 0,
	"UTC-01:00": -1,
	"UTC-02:00": -2,
	"UTC-03:00": -3,
	"UTC-03:30": -3.5,
	"UTC-04:00": -4,
	"UTC-05:00": -5,
	"UTC-06:00": -6,
	"UTC-07:00": -7,
	"UTC-08:00": -8,
	"UTC-09:00": -9,
	"UTC-09:30": -9.5,
	"UTC-10:00": -10,
	"UTC-11:00": -11,
	"UTC-12:00": -12,
};
export const timeZones: string[] = [
	"UTC+14:00",
	"UTC+13:00",
	"UTC+12:45",
	"UTC+12:00",
	"UTC+11:00",
	"UTC+10:30",
	"UTC+10:00",
	"UTC+09:30",
	"UTC+09:00",
	"UTC+08:45",
	"UTC+08:00",
	"UTC+07:00",
	"UTC+06:30",
	"UTC+06:00",
	"UTC+05:45",
	"UTC+05:30",
	"UTC+05:00",
	"UTC+04:30",
	"UTC+04:00",
	"UTC+03:30",
	"UTC+03:00",
	"UTC+02:00",
	"UTC+01:00",
	"UTC+00:00",
	"UTC-01:00",
	"UTC-02:00",
	"UTC-03:00",
	"UTC-03:30",
	"UTC-04:00",
	"UTC-05:00",
	"UTC-06:00",
	"UTC-07:00",
	"UTC-08:00",
	"UTC-09:00",
	"UTC-09:30",
	"UTC-10:00",
	"UTC-11:00",
	"UTC-12:00",
];
const langs: string[][] = [
	["Sunday", "တနင်္ဂနွေ"],
	["Monday", "တနင်္လာ"],
	["Tuesday", "အင်္ဂါ"],
	["Wednesday", "ဗုဒ္ဓဟူး"],
	["Thursday", "ကြာသပတေး"],
	["Friday", "သောကြာ"],
	["Saturday", "စနေ"],
	//
	["January", "ဇန်နဝါရီ"],
	["February", "ဖေဖော်ဝါရီ"],
	["March", "မတ်"],
	["April", "ဧပြီ"],
	["May", "မေ"],
	["June", "ဇွန်"],
	["July", "ဇူလိုင်"],
	["August", "ဩဂုတ်"],
	["September", "စက်တင်ဘာ"],
	["October", "အောက်တိုဘာ"],
	["November", "နိုဝင်ဘာ"],
	["December", "ဒီဇင်ဘာ"],
	//
	["Tagu", "တန်ခူး"],
	["Kason", "ကဆုန်"],
	["Nayon", "နယုန်"],
	["Waso", "ဝါဆို"],
	["Wagaung", "ဝါခေါင်"],
	["Tawthalin", "တော်သလင်း"],
	["Thadingyut", "သီတင်းကျွတ်"],
	["Tazaungmon", "တန်ဆောင်မုန်း"],
	["Nadaw", "နတ်တော်"],
	["Pyatho", "ပြာသို"],
	["Tabodwe", "တပို့တွဲ"],
	["Tabaung", "တပေါင်း"],
	["First Waso", "ပ-ဝါဆို"],
	["Late Tagu", "နှောင်းတန်ခူး"],
	["Late Kason", "နှောင်းကဆုန်"],
	//
	["Waxing", "လဆန်း"],
	["Waning", "လဆုတ်"],
	["Full Moon", "လပြည့်"],
	["New Moon", "လကွယ်"],
	//
	["East", "အရှေ့"],
	["West", "အနောက်"],
	["South", "တောင်"],
	["North", "မြောက်"],
	//
	["Binga", "ဘင်္ဂ"],
	["Atun", "အထွန်း"],
	["Yaza", "ရာဇ"],
	["Adipati", "အဓိပတိ"],
	["Marana", "မရဏ"],
	["Thike", "သိုက်"],
	["Puti", "ပုတိ"],
	//
	["Amyeittasote", "အမြိတ္တစုတ်"],
	["Warameittugyi", "ဝါရမိတ္တုကြီး"],
	["Warameittunge", "ဝါရမိတ္တုငယ်"],
	["Thamaphyu", "သမားဖြူ"],
	["Thamanyo", "သမားညို"],
	["Yatpote", "ရက်ပုပ်"],
	["Yatyotema", "ရက်ယုတ်မာ"],
	["Mahayatkyan", "မဟာရက်ကြမ်း"],
	["Nagapor", "နဂါးပေါ်"],
	["Shanyat", "ရှမ်းရက်"],
	//
	["Ogre", "ဘီလူး"],
	["Elf", "နတ်"],
	["Human", "လူ"],
	//
	["Sabbath Eve", "အဖိတ်"],
	["Sabbath", "ဥပုသ်"],
	//
	["Yatyaza", "ရက်ရာဇာ"],
	["Pyathada", "ပြဿဒါး"],
	["Afternoon Pyathada", "မွန်းလွဲပြဿဒါး"],
	//
	["Independence Day", "လွတ်လပ်ရေးနေ့"],
	["Union Day", "ပြည်ထောင်စုနေ့"],
	["Peasants' Day", "တောင်သူလယ်သမားနေ့"],
	["Labour Day", "အလုပ်သမားနေ့"],
	["Martyrs' Day", "အာဇာနည်နေ့"],
	["Holiday", "ရုံးပိတ်ရက်"],
	["Armed Forces Day", "တပ်မတော်နေ့"],
	["New Year's Day", "နှစ်သစ်ကူးရုံးပိတ်ရက်"],
	["Christmas", "ခရစ္စမတ်နေ့"],
	//
	["Burmese New Year's Day", "နှစ်ဆန်း"],
	["Thingyan Atat", "သင်္ကြန်အတက်နေ့"],
	["Thingyan Akyat", "သင်္ကြန်အကြတ်နေ့"],
	["Thingyan Akya", "သင်္ကြန်အကျနေ့"],
	["Thingyan Akyo", "သင်္ကြန်အကြိုနေ့"],
	//
	["Eid al-Adha", "အိဒ်နေ့"],
	["Deepavali", "ဒီဝါလီ"],
	//
	["Buddha Day", "ဗုဒ္ဓနေ့"],
	["Beginning of Buddhist Lent", "ဓမ္မစကြာနေ့"],
	["End of Buddhist Lent", "သီတင်းကျွတ်မီးထွန်းပွဲ"],
	["Tazaungdaing", "တန်ဆောင်တိုင်"],
	["National Day", "အမျိုးသားနေ့"],
	["Karen New Year's Day", "ကရင်နှစ်သစ်ကူး"],
	["Tabaung Pwe", "တပေါင်းပွဲ"],
];
/**
 * List of Myanmer month name
 */
const MyMonthName: string[] = [
	"First Waso",
	"Tagu",
	"Kason",
	"Nayon",
	"Waso",
	"Wagaung",
	"Tawthalin",
	"Thadingyut",
	"Tazaungmon",
	"Nadaw",
	"Pyatho",
	"Tabodwe",
	"Tabaung",
	"Late Tagu",
	"Late Kason",
];
/**
 * Moon Phases
 */
const MoonPhase: string[] = ["Waxing", "Full Moon", "Waning", "New Moon"];
/**
 * Name of Months
 */
const MONTHS: string[] = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
/**
 * List of short month name
 */
const MO = MONTHS.map((i) => i.split("").slice(0, 3).join(""));
/**
 * Weekday Name
 */
const WEEK_DAYS: string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
/**
 * Weekday shorts
 */
const WD = WEEK_DAYS.map((i) => i.split("").slice(0, 3).join(""));

//
export class MyJulian {
	protected _ct: CalendarTypes;
	protected _tz: TimeZones;
	protected _jd: number;
	protected static _sg = 2361222;
	constructor(jd?: number, tz?: TimeZones, ct?: CalendarTypes) {
		this._ct = ct ?? "Gregorian";
		this._tz = tz ?? "UTC+00:00";
		this._jd = jd ?? this.jdnow();
	}
	/**
	 * Returns the secular difference between the Julian period and the Gregorian
	 * period, given a year.
	 * @param year The year for which to calculate the secular difference.
	 * @returns The secular difference between the Julian period and the Gregorian
	 * period, for the given year.
	 */
	static secularDiff(year: number): number {
		return Math.floor(year / 100) - Math.floor(year / 400) - 2;
	}

	/**
	 * Convert a Unix timestamp (in seconds) to a Julian Date.
	 * @param unix Unix timestamp in seconds.
	 * @returns Julian Date.
	 */
	static unix2jd(unix: number): number {
		return 2440587.5 + unix / 86400.0;
	}
	/**
	 * Convert a Julian Date to a Unix timestamp (in seconds).
	 * @param jd Julian Date.
	 * @returns Unix timestamp in seconds.
	 */
	static jd2unix(jd: number) {
		return (jd - 2440587.5) * 86400.0 + 0.5;
	}
	/**
	 * Return the current UTC Julian Date.
	 * @returns The current UTC Julian Date.
	 */
	static jdutc(): number {
		const dt: Date = new Date();
		const unix: number = dt.getTime() / 1000;
		return MyJulian.unix2jd(unix);
	}
	/**
	 * Return the current Julian Date in Yangon, Myanmar.
	 * @returns The current Julian Date in Yangon, Myanmar.
	 */
	static jdmm(): number {
		const mmTz = TimeZ["UTC+06:30"];
		return MyJulian.jdutc() + mmTz / 24;
	}
	/**
	 * Return the current Julian Date in the time zone of this instance.
	 * @returns The current Julian Date in the time zone of this instance.
	 */
	jdnow() {
		const tzz = TimeZ[this._tz];
		return MyJulian.jdutc() + tzz / 24;
	}
	/**
	 * Convert a Julian Date to a date and time in a specific time zone.
	 * @param jd The Julian Date to convert.
	 * @param tz The time zone offset in hours to use for the conversion. If not
	 * provided, this defaults to 0 (UTC).
	 * @returns An object with the following properties: year, month, day, hour,
	 * minute, second.
	 */
	public static jd2dt(
		jd: number,
		tz?: TimeZones,
	): {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	} {
		const _tzz: TimeZones = tz ?? "UTC+00:00";
		const tzz = TimeZ[_tzz];
		const jdd = jd + tzz / 24;
		// JDN to Year Month Date
		const jdn = Math.round(jdd);

		const a = 4 * jdn - 6884477;
		const x3 = Math.floor(a / 146097);
		const r3 = a % 146097;

		const b = 100 * Math.floor(r3 / 4) + 99;
		const x2 = Math.floor(b / 36525);
		const r2 = b % 36525;

		const c = 5 * Math.floor(r2 / 100) + 2;
		const x1 = Math.floor(c / 153);
		const r1 = c % 153;

		const cc = Math.floor((x1 + 2) / 12);
		const year = 100 * x3 + x2 + cc;
		const month = x1 - 12 * cc + 3;
		const day = Math.floor(r1 / 5) + 1;

		// decimal fraction of JD to Hour Minute Second
		const j = Math.floor(jdd);
		const fjdn = jdd - j;
		const xx1 =
			fjdn >= 0.5
				? (fjdn * 86400 - 43200) / 3600
				: (fjdn * 86400 + 43200) / 3600;
		const hour = Math.floor(xx1);
		const xx2 = (xx1 - hour) * 3600;
		const xx3 = xx2 / 60;
		const minute = Math.floor(xx3);
		const second = Math.floor((xx3 - minute) * 60);
		return {
			year,
			month,
			day,
			hour,
			minute,
			second,
		};
	}
	/**
	 * Convert a Julian Day to a date-time object.
	 *
	 * @param jd The Julian Day to convert.
	 * @param tz The timezone offset in hours. Defaults to 0 (UTC).
	 * @param ct The calendar type. Defaults to "Gregorian".
	 * @returns An object with the following properties: year, month, date, hour, minute, second, and string.
	 * The string property is a string representation of the date and time in the format "Month Day, Year Hour:Minute:Second".
	 */
	public static jd2DateTime(
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
	} {
		const tzz = tz ?? "UTC+00:00";
		const ctt = ct ?? "Gregorian";
		const ma: string[] = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const g = MyJulian.jd2dt(jd, tzz);
		const g2 = MyJulian.jd2dt(jd - MyJulian.secularDiff(g.year), tzz);
		const g3 =
			ctt === "Julian" || (ctt === "British" && jd < MyJulian._sg) ? g2 : g;
		const mo = ma[g3.month - 1];
		const h = g3.hour.toString().length === 1 ? `0${g3.hour}` : `${g3.hour}`;
		const mi =
			g3.minute.toString().length === 1 ? `0${g3.minute}` : `${g3.minute}`;
		const s =
			g3.second.toString().length === 1 ? `0${g3.second}` : `${g3.second}`;
		const str: string = `${mo} ${g3.day} , ${g3.year} , ${h}:${mi}:${s}`;
		return {
			year: g3.year,
			month: g3.month,
			date: g3.day,
			hour: g3.hour,
			minute: g3.minute,
			second: g3.second,
			string: str,
		};
	}
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
	public static dateTime2Julian(
		year: number,
		month: number,
		day: number,
		hour: number,
		minute: number,
		second: number,
		ct: CalendarTypes,
	): { jd: number; jdn: number } {
		// setting default values
		const h: number = hour ?? 12;
		const m: number = minute ?? 0;
		const s: number = second ?? 0;
		const ctt: CalendarTypes = ct ?? "Gregorian";
		const d: number = MyJulian.secularDiff(year);
		// To decimal fraction of the day
		// h , m , s
		const df: number = (h - 12) / 24 + m / 1440 + s / 86400;
		// pre jdn
		const a: number = Math.floor((month - 3) / 12);
		const x4: number = year + a;
		const x3: number = Math.floor(x4 / 100);
		const x2: number = x4 % 100;
		const x1: number = month - 12 * a - 3;
		const _jdn: number =
			Math.floor((146097 * x3) / 4) +
			Math.floor((36525 * x2) / 100) +
			Math.floor((153 * x1 + 2) / 5) +
			day +
			1721119;
		// pre jd with decimal fraction of h,m,s and local tz offset, given tz offset
		const _jd: number = _jdn + df;
		// check calendar type and if pre jd lass than 2361222 + secular difference
		// Gregorian date 1752-Sep-14 JDN = 2361222
		const jd: number =
			ctt === "Julian" || (ctt === "British" && _jd < MyJulian._sg)
				? _jd + d
				: _jd;
		// make sure jdn with tz and calendar type
		const jdn: number = Math.round(jd);
		return {
			jd,
			jdn,
		};
	}
	protected utcTime(): {
		year: number;
		month: number;
		date: number;
		hour: number;
		minute: number;
		second: number;
	} {
		const dt = new Date();
		const year = dt.getUTCFullYear();
		const month = dt.getUTCMonth();
		const date = dt.getUTCDate();
		const hour = dt.getUTCHours();
		const minute = dt.getUTCMinutes();
		const second = dt.getUTCSeconds();
		return { year, month, date, hour, minute, second };
	}
	public set jd(jd: number) {
		this._jd = jd;
	}
	public get jd(): number {
		return this._jd;
	}
	public get jdn() {
		return Math.round(this._jd);
	}
	public set tz(tz: TimeZones) {
		this._tz = tz;
	}
	public get tz(): TimeZones {
		return this._tz;
	}
	public set ct(ct: CalendarTypes) {
		this._ct = ct;
	}
	public get ct() {
		return this._ct;
	}
	/**
	 * Gets the year of this date in the Gregorian calendar.
	 * @returns The year of this date in the Gregorian calendar.
	 */
	public get year(): number {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).year;
	}
	public get month(): number {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).month;
	}

	public get date(): number {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).date;
	}

	public get hour(): number {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).hour;
	}

	public get minute(): number {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).minute;
	}

	public get second(): number {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).second;
	}
	protected getwd() {
		const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
		const wdid = (this.jdn + 2) % 7;
		const str = days[wdid];
		return { wdid, str };
	}
	public get wd(): number {
		return this.getwd().wdid;
	}
	public get wdstr(): string {
		return this.getwd().str;
	}
	public get utcjdNow(): number {
		return MyJulian.jdutc();
	}
	public get mmjdNow(): number {
		return MyJulian.jdmm();
	}
	public get utcYear(): number {
		return this.utcTime().year;
	}
	public get utcMonth(): number {
		return this.utcTime().month;
	}
	public get utcDate(): number {
		return this.utcTime().date;
	}
	public get utcHour(): number {
		return this.utcTime().hour;
	}
	public get utcMinute(): number {
		return this.utcTime().minute;
	}
	public get utcSecond(): number {
		return this.utcTime().second;
	}
}

export class MyMoon extends MyJulian {
	protected static mod360(f: number) {
		let t = f % 360;
		if (t < 0) t += 360;
		return t;
	}
	static getCycle(year: number, month: number) {
		const yf = (month * 30 + 15) / 365; //Estimate fraction of year
		const k = 12.3685 * (year + yf - 2000);
		return Math.floor(k);
	}
	protected static phaseDate(cycle: number, phase: MoonPhases) {
		// phase - 0 = new, .25 = first quarter, .5 = full, .75 = last quarter, all other values are invalid
		//From Meeus ch49
		const k = cycle + phase;

		const toRad = Math.PI / 180;

		const T = k / 1236.85; //49.3
		let JDE =
			2451550.09766 +
			29.530588861 * k +
			0.00015437 * T * T -
			0.00000015 * T * T * T +
			0.00000000073 * T * T * T * T; //49.1

		const E = 1 - 0.002516 * T - 0.0000074 * T * T; //47.6

		const M =
			MyMoon.mod360(
				2.5534 + 29.1053567 * k - 0.0000014 * T * T - 0.00000011 * T * T * T,
			) * toRad; //49.4
		const Mp =
			MyMoon.mod360(
				201.5643 +
					385.81693528 * k +
					0.0107582 * T * T +
					0.00001238 * T * T * T -
					0.000000058 * T * T * T * T,
			) * toRad; //49.5
		const F =
			MyMoon.mod360(
				160.7108 +
					390.67050284 * k -
					0.0016118 * T * T -
					0.00000227 * T * T * T +
					0.000000011 * T * T * T * T,
			) * toRad; //49.6
		const Om =
			MyMoon.mod360(
				124.7746 - 1.56375588 * k + 0.0020672 * T * T + 0.00000215 * T * T * T,
			) * toRad; //49.7

		//P351-352
		const A1 = MyMoon.mod360(299.77 + 0.107408 * k - 0.009173 * T * T) * toRad;
		const A2 = MyMoon.mod360(251.88 + 0.016321 * k) * toRad;
		const A3 = MyMoon.mod360(251.83 + 26.651886 * k) * toRad;
		const A4 = MyMoon.mod360(349.42 + 36.412478 * k) * toRad;
		const A5 = MyMoon.mod360(84.66 + 18.206239 * k) * toRad;
		const A6 = MyMoon.mod360(141.74 + 53.303771 * k) * toRad;
		const A7 = MyMoon.mod360(207.14 + 2.453732 * k) * toRad;
		const A8 = MyMoon.mod360(154.84 + 7.30686 * k) * toRad;
		const A9 = MyMoon.mod360(34.52 + 27.261239 * k) * toRad;
		const A10 = MyMoon.mod360(207.19 + 0.121824 * k) * toRad;
		const A11 = MyMoon.mod360(291.34 + 1.844379 * k) * toRad;
		const A12 = MyMoon.mod360(161.72 + 24.198154 * k) * toRad;
		const A13 = MyMoon.mod360(239.56 + 25.513099 * k) * toRad;
		const A14 = MyMoon.mod360(331.55 + 3.592518 * k) * toRad;
		let correction = 0;
		if (phase === 0) {
			correction =
				0.00002 * Math.sin(4 * Mp) +
				-0.00002 * Math.sin(3 * Mp + M) +
				-0.00002 * Math.sin(Mp - M - 2 * F) +
				0.00003 * Math.sin(Mp - M + 2 * F) +
				-0.00003 * Math.sin(Mp + M + 2 * F) +
				0.00003 * Math.sin(2 * Mp + 2 * F) +
				0.00003 * Math.sin(Mp + M - 2 * F) +
				0.00004 * Math.sin(3 * M) +
				0.00004 * Math.sin(2 * Mp - 2 * F) +
				-0.00007 * Math.sin(Mp + 2 * M) +
				-0.00017 * Math.sin(Om) +
				-0.00024 * E * Math.sin(2 * Mp - M) +
				0.00038 * E * Math.sin(M - 2 * F) +
				0.00042 * E * Math.sin(M + 2 * F) +
				-0.00042 * Math.sin(3 * Mp) +
				0.00056 * E * Math.sin(2 * Mp + M) +
				-0.00057 * Math.sin(Mp + 2 * F) +
				-0.00111 * Math.sin(Mp - 2 * F) +
				0.00208 * E * E * Math.sin(2 * M) +
				-0.00514 * E * Math.sin(Mp + M) +
				0.00739 * E * Math.sin(Mp - M) +
				0.01039 * Math.sin(2 * F) +
				0.01608 * Math.sin(2 * Mp) +
				0.17241 * E * Math.sin(M) +
				-0.4072 * Math.sin(Mp);
		} else if (phase === 0.25 || phase === 0.75) {
			correction =
				-0.00002 * Math.sin(3 * Mp + M) +
				0.00002 * Math.sin(Mp - M + 2 * F) +
				0.00002 * Math.sin(2 * Mp - 2 * F) +
				0.00003 * Math.sin(3 * M) +
				0.00003 * Math.sin(Mp + M - 2 * F) +
				0.00004 * Math.sin(Mp - 2 * M) +
				-0.00004 * Math.sin(Mp + M + 2 * F) +
				0.00004 * Math.sin(2 * Mp + 2 * F) +
				-0.00005 * Math.sin(Mp - M - 2 * F) +
				-0.00017 * Math.sin(Om) +
				0.00027 * E * Math.sin(2 * Mp + M) +
				-0.00028 * E * E * Math.sin(Mp + 2 * M) +
				0.00032 * E * Math.sin(M - 2 * F) +
				0.00032 * E * Math.sin(M + 2 * F) +
				-0.00034 * E * Math.sin(2 * Mp - M) +
				-0.0004 * Math.sin(3 * Mp) +
				-0.0007 * Math.sin(Mp + 2 * F) +
				-0.0018 * Math.sin(Mp - 2 * F) +
				0.00204 * E * E * Math.sin(2 * M) +
				0.00454 * E * Math.sin(Mp - M) +
				0.00804 * Math.sin(2 * F) +
				0.00862 * Math.sin(2 * Mp) +
				-0.01183 * E * Math.sin(Mp + M) +
				0.17172 * E * Math.sin(M) +
				-0.62801 * Math.sin(Mp);

			const W =
				0.00306 -
				0.00038 * E * Math.cos(M) +
				0.00026 * Math.cos(Mp) -
				0.00002 * Math.cos(Mp - M) +
				0.00002 * Math.cos(Mp + M) +
				0.00002 * Math.cos(2 * F);
			if (phase === 0.25) {
				correction += W;
			} else {
				correction -= W;
			}
		} else if (phase === 0.5) {
			correction =
				0.00002 * Math.sin(4 * Mp) +
				-0.00002 * Math.sin(3 * Mp + M) +
				-0.00002 * Math.sin(Mp - M - 2 * F) +
				0.00003 * Math.sin(Mp - M + 2 * F) +
				-0.00003 * Math.sin(Mp + M + 2 * F) +
				0.00003 * Math.sin(2 * Mp + 2 * F) +
				0.00003 * Math.sin(Mp + M - 2 * F) +
				0.00004 * Math.sin(3 * M) +
				0.00004 * Math.sin(2 * Mp - 2 * F) +
				-0.00007 * Math.sin(Mp + 2 * M) +
				-0.00017 * Math.sin(Om) +
				-0.00024 * E * Math.sin(2 * Mp - M) +
				0.00038 * E * Math.sin(M - 2 * F) +
				0.00042 * E * Math.sin(M + 2 * F) +
				-0.00042 * Math.sin(3 * Mp) +
				0.00056 * E * Math.sin(2 * Mp + M) +
				-0.00057 * Math.sin(Mp + 2 * F) +
				-0.00111 * Math.sin(Mp - 2 * F) +
				0.00209 * E * E * Math.sin(2 * M) +
				-0.00514 * E * Math.sin(Mp + M) +
				0.00734 * E * Math.sin(Mp - M) +
				0.01043 * Math.sin(2 * F) +
				0.01614 * Math.sin(2 * Mp) +
				0.17302 * E * Math.sin(M) +
				-0.40614 * Math.sin(Mp);
		}

		JDE += correction;

		//Additional corrections P 252
		correction =
			0.000325 * Math.sin(A1) +
			0.000165 * Math.sin(A2) +
			0.000164 * Math.sin(A3) +
			0.000126 * Math.sin(A4) +
			0.00011 * Math.sin(A5) +
			0.000062 * Math.sin(A6) +
			0.00006 * Math.sin(A7) +
			0.000056 * Math.sin(A8) +
			0.000047 * Math.sin(A9) +
			0.000042 * Math.sin(A10) +
			0.00004 * Math.sin(A11) +
			0.000037 * Math.sin(A12) +
			0.000035 * Math.sin(A13) +
			0.000023 * Math.sin(A14);

		JDE += correction;

		return JDE;
	}
	static calMoonPhases(year: number, month: number) {
		const cy: number = MyMoon.getCycle(year, month);
		const _n: number = MyMoon.phaseDate(cy, 0);
		const _fst: number = MyMoon.phaseDate(cy, 0.25);
		const _ful: number = MyMoon.phaseDate(cy, 0.5);
		const _lst: number = MyMoon.phaseDate(cy, 0.75);
		return {
			new: _n,
			fq: _fst,
			full: _ful,
			lq: _lst,
		};
	}
	static fullMoonDays(year: number): string[] {
		const tz: TimeZones = "UTC+00:00";
		const ct: CalendarTypes = "Gregorian";
		const phases = new Array(12)
			.fill(0)
			.map((_, i) => MyMoon.calMoonPhases(year, i));
		return phases.map((p) => MyMoon.jd2DateTime(p.full, tz, ct).string);
	}
	protected moon_age() {
		// tz offset of this to fraction of day
		const df = TimeZ[this._tz] / 24;
		// set time zone as GMT
		const y = this.utcYear;
		const rm = this.utcMonth;
		// last and next month
		const pm = rm - 1;
		const nm = rm + 1;
		// sometime 2 new moon days in one month , store nm to an array
		// recent month NMs
		const rnms: number[] = [];
		rnms.push(MyMoon.calMoonPhases(y, rm).new);
		// prev month NMs
		const pnms: number[] = [];
		pnms.push(MyMoon.calMoonPhases(y, pm).new);
		// next month NMs
		const nnms: number[] = [];
		nnms.push(MyMoon.calMoonPhases(y, nm).new);
		// set jd for now , utc + tz fraction of this
		const jdnow = this.utcjdNow + df;
		// find previous and next new moon days as ,jd
		const nm1: number | undefined = rnms.find((i) => i < jdnow);
		const nm2: number | undefined = rnms.find((i) => i > jdnow);
		const nm3: number = pnms.length > 1 ? pnms[1] : pnms[0];
		const nm4: number = nnms[0];
		// previous
		const pn_m: number = nm1 ? nm1 : nm3;
		const p_n_m: number = pn_m + df;
		// next
		const nn_m: number = nm2 ? nm2 : nm4;
		const n_n_m: number = nn_m + df;
		//TODO length of month
		const l_m: number = n_n_m - p_n_m;
		// moon age now
		const man = jdnow - p_n_m;
		// find full moon
		const fma: number[] = [];
		for (let i = pm; i <= nm; i++) {
			fma.push(MyMoon.calMoonPhases(y, i).full + df);
		}
		let fm = 0;
		for (const f of fma) {
			if (f > p_n_m && f < n_n_m) {
				fm = f;
			}
		}
		// string of fm, pnm and nnm
		const fmStr = MyMoon.jd2DateTime(fm).string;
		const pnmStr = MyMoon.jd2DateTime(p_n_m).string;
		const nnmStr = MyMoon.jd2DateTime(n_n_m).string;
		return { l_m, man, pnmStr, nnmStr, fmStr };
	}
	public moonAge() {
		return this.moon_age().man;
	}
	public get previousNM() {
		return this.moon_age().pnmStr;
	}
	public get nextNM() {
		return this.moon_age().nnmStr;
	}
	public get FM() {
		return this.moon_age().fmStr;
	}
}
// ------------------ Myanmar Calendar Calculation -------------------------------------------------//
/**
 * Basic MCC
 */
const bcc: BCC = {
	MO: 1954168.050623,
	SY: 1577917828 / 4320000,
	LM: 1577917828 / 53433336,
	WTE: {
		one: [1201, 1263, 1344],
		zero: [1202, 1264, 1345],
	},
	FME: [
		[1377, 1],
		//
		[1234, 1],
		[1261, -1],
		[1120, 1],
		[1126, -1],
		[1150, 1],
		[1172, -1],
		[1207, 1],
		[813, -1],
		[849, -1],
		[851, -1],
		[854, -1],
		[927, -1],
		[933, -1],
		[936, -1],
		[938, -1],
		[949, -1],
		[952, -1],
		[963, -1],
		[968, -1],
		[1039, -1],
		[205, 1],
		[246, 1],
		[471, 1],
		[572, -1],
		[651, 1],
		[653, 2],
		[656, 1],
		[672, 1],
		[729, 1],
		[767, -1],
	],
	// ၁၉နှစ်စက်ဝန်းအကြွင်းဇယား
	// မြန်မာနှစ်အား ၁၉ ဖြင့်စား အောက်ပါအကြွင်းများ သတ်မှတ်သည့်နှစ်ကာလအပိုင်းအလိုက်ရရှိပါက ဝါထပ်နှစ်ဖြစ်သည်
	MC: [
		//  ၁၂၁၆ ခုနှစ်အထိ အကြွင်း ( ၂၊ ၅၊ ၇၊ ၁ဝ၊ ၁၃၊ ၁၅၊ ၁၈ )
		[2, 5, 7, 10, 13, 15, 18],
		// ၁၂၁၇ ခုနှစ် မှ ၁၂၇၃ ခုနှစ်အထိ အကြွင်း  ( ၁၊ ၄၊ ၇၊ ၁ဝ၊ ၁၂၊ ၁၅၊ ၁၈ )
		[1, 4, 7, 10, 12, 15, 18],
		// ၁၂၇၄ ခုနှစ်မှ ၁၃၁၁ ခုနှစ်အထိ အကြွင်း ( ၁၊ ၄၊ ၇၊ ၉၊ ၁၂၊ ၁၅၊ ၁၈ )
		[1, 4, 7, 9, 12, 15, 18],
		// ၁၃၁၂ ခုနှစ်မှစ၍ အကြွင်း ( ၁၊ ၄၊ ၆၊ ၉၊ ၁၂၊ ၁၅၊ ၁၇ )
		[1, 4, 6, 9, 12, 15, 17],
	],
	ky(my: number): number {
		if (!Number.isInteger(my) || my <= 0) {
			throw new Error("Invalid Myanmar Year");
		}
		return my + 3739;
	},

	by(my: number): number {
		if (!Number.isInteger(my) || my <= 0) {
			throw new Error("Invalid Myanmar Year");
		}
		return my + 1182;
	},

	e3(my: number): boolean {
		return my >= 1312;
	},

	e2(my: number): boolean {
		return my < 1312 && my >= 1217;
	},

	e13(my: number): boolean {
		return my < 1217 && my >= 1100;
	},

	e12(my: number): boolean {
		return my < 1100 && my >= 798;
	},

	e11(my: number): boolean {
		return my < 798;
	},
	searchFme(n: number) {
		const a: number[] | undefined = this.FME.find((i) => i[0] === n);
		let r = 0;
		if (a !== undefined) {
			r = a[1];
		} else {
			r = 0;
		}
		return r;
	},
	wh19(my: number) {
		const c = my % 19;
		let r = 0;
		if (bcc.WTE.zero.includes(my)) {
			r = 0;
		} else if (bcc.WTE.one.includes(my)) {
			r = 1;
		} else if (my <= 1216) {
			r = bcc.MC[0].includes(c) ? 1 : 0;
		} else if (my >= 1217 && my <= 1273) {
			r = bcc.MC[1].includes(c) ? 1 : 0;
		} else if (my >= 1274 && my <= 1311) {
			r = bcc.MC[2].includes(c) ? 1 : 0;
		} else if (my >= 1312) {
			r = bcc.MC[3].includes(c) ? 1 : 0;
		}
		return r;
	},
	nmwo(my: number): { nm: number; wo: number } {
		let nm = 0;
		let wo = 0;
		if (bcc.e3(my)) {
			nm = 8;
			wo = -0.5;
		} else if (bcc.e2(my)) {
			nm = 4;
			wo = -1;
		} else if (bcc.e13(my)) {
			nm = -1;
			wo = -0.85;
		} else {
			nm = -1;
			wo = -1.1;
		}
		return { nm: nm, wo: wo + bcc.searchFme(my) };
	},

	ta(my: number): number {
		return (12 - bcc.nmwo(my).nm) * (bcc.SY / 12 - bcc.LM);
	},

	tw(my: number): number {
		return bcc.LM - bcc.nmwo(my).nm * (bcc.SY / 12 - bcc.LM);
	},

	ed(my: number): number {
		if (!Number.isInteger(my) || my <= 0) {
			throw new Error("Invalid Myanmar Year");
		}
		const kyValue: number = bcc.ky(my);
		const eday: number = (bcc.SY * kyValue) % bcc.LM;
		return eday < bcc.ta(my) ? eday + bcc.LM : eday;
	},

	nyt(my: number): number {
		return bcc.SY * my + bcc.MO;
	},
	whEra(my: number): number {
		const myt: number = bcc.ed(my) >= bcc.tw(my) ? 1 : 0;
		let r = 0;
		if (bcc.WTE.one.includes(my)) {
			r = 1;
		} else if (bcc.WTE.zero.includes(my)) {
			r = 0;
		} else {
			r = myt;
		}
		return r;
	},

	ser2ndws(my: number): number {
		return Math.round(
			bcc.nyt(my) - bcc.ed(my) + 4.5 * bcc.LM + bcc.nmwo(my).wo,
		);
	},
	checkMmYear(my: number): CheckMmYear {
		const a = bcc.whEra(my);
		const b1 = bcc.ser2ndws(my);
		let c = 0;
		let L = 0;
		let bs = 0;
		for (let i = 1; i < 4; i++) {
			bs = bcc.ser2ndws(my - i);
			c = bcc.whEra(my - i);
			L = i;
			if (c === 1) {
				break;
			}
		}
		const b3 = (b1 - bs) % 354;
		const myt = a === 0 ? a : Math.floor(b3 / 31) + a;
		const fm = a === 1 ? b1 : bs + 354 * L;
		const err = a === 1 && b3 !== 31 && b3 !== 30 ? 1 : 0;
		const tg1 = bs + 354 * L - 102;
		return { myt, tg1, fm, err };
	},
	mmyl(myt: number): number {
		return 354 + (1 - Math.floor(1 / (myt + 1))) * 30 + Math.floor(myt / 2);
	},
	mml(myt: number, mm: number): number {
		/* စုံ = ၃၀ မ = ၂၉ */
		let mml = 30 - (mm % 2);
		/*
     ဝါကြီးထပ်နှစ်အတွက် နယုန်လတွင်တစ်ရက်ပေါင်း
     29 + 1 = 30 days
     */
		if (mm === 3) {
			mml += Math.floor(myt / 2);
		}
		return mml;
	},
	mp(myt: number, mm: number, md: number): number {
		const ml = bcc.mml(myt, mm);
		return (
			Math.floor((md + 1) / 16) + Math.floor(md / 16) + Math.floor(md / ml)
		);
	},
	mf(md: number) {
		return md - 15 * Math.floor(md / 16);
	},
	md(mf: number, mp: number, mm: number, myt: number): number {
		const mml = bcc.mml(myt, mm);
		const m1 = mp % 2;
		const m2 = Math.floor(mp / 2);
		return m1 * (15 + m2 * (mml - 15)) + (1 - m1) * (mf + 15 * m2);
	},
	j2m(jdn: number): { myt: number; my: number; mm: number; md: number } {
		const j: number = Math.round(jdn);
		const my: number = Math.floor((j - 0.5 - bcc.MO) / bcc.SY);
		const yc: CheckMmYear = bcc.checkMmYear(my);
		/* ရက်အရေအတွက် */
		let dd: number = j - yc.tg1 + 1;
		const b: number = Math.floor(yc.myt / 2);
		const c: number = Math.floor(1 / (yc.myt + 1));

		const myl: number = 354 + (1 - c) * 30 + b;
		/* month type: late =1 or early = 0 */
		const mmt = Math.floor((dd - 1) / myl);
		dd -= mmt * myl;
		/* adjust day count and threshold */
		const a: number = Math.floor((dd + 423) / 512);
		let mm: number = Math.floor((dd - b * a + c * a * 30 + 29.26) / 29.544);
		const e: number = Math.floor((mm + 12) / 16);
		const f: number = Math.floor((mm + 11) / 16);
		const md: number =
			dd - Math.floor(29.544 * mm - 29.26) - b * e + c * f * 30;
		/* adjust month numbers for late months */
		mm += f * 3 - e * 4 + 12 * mmt;
		const myt: number = yc.myt;
		return {
			myt,
			my,
			mm,
			md,
		};
	},
};
/**
 * **Get Thingyan Holidays**
 * @param jdn Julian Day Number
 * @param my Myanmar Calendar Year
 * @param mmt Myanmar Month Type
 * @param hs String array to collect holidays
 */
function thingyanHolidays(jdn: number, my: number, mmt: number, hs: string[]) {
	//solar year (365.2587565)
	const SY: number = 1577917828.0 / 4320000.0;
	//beginning of 0 ME
	const MO: number = 1954168.050623;
	//start of Thingyan
	const BGNTG: number = 1100;
	//third era
	const SE3: number = 1312;
	const atat = SY * (my + mmt) + MO;
	let atar = 0;
	if (my >= SE3) {
		atar = atat - 2.169918982;
	} else {
		atar = atat - 2.1675;
	}
	const akyaNay = Math.floor(atar);
	const atatNay = Math.floor(atat);
	if (jdn === atatNay + 1) {
		hs.push("Burmese New Year's Day");
	}
	if (my + mmt >= BGNTG) {
		if (jdn === atatNay) {
			hs.push("Thingyan Atat");
		} else if (jdn > akyaNay && jdn < atatNay) {
			hs.push("Thingyan Akyat");
		} else if (jdn === akyaNay) {
			hs.push("Thingyan Akya");
		} else if (jdn === akyaNay - 1) {
			hs.push("Thingyan Akyo");
			//conditional add thingyan holidays
		} else if (
			my + mmt >= 1369 &&
			my + mmt < 1379 &&
			(jdn === akyaNay - 2 || (jdn >= atatNay + 2 && jdn <= akyaNay + 7))
		) {
			hs.push("Holiday");
		} else if (
			my + mmt >= 1384 &&
			my + mmt <= 1385 &&
			(jdn === akyaNay - 5 ||
				jdn === akyaNay - 4 ||
				jdn === akyaNay - 3 ||
				jdn === akyaNay - 2)
		) {
			hs.push("Holiday");
		} else if (my + mmt >= 1386 && jdn >= atatNay + 2 && jdn <= akyaNay + 7) {
			hs.push("Holiday");
		}
	}
}
/**
 *  **Get public holidays of Myanmar on Myanmar Calendar's date**
 * @param my Myanmar Calendar Year
 * @param mm Myanmar Calendar Month
 * @param md Myanmar Calendar Day
 * @param mp Moon Phase
 * @param hs String array to collect holidays
 */
function mmHolidays(
	my: number,
	mm: number,
	md: number,
	mp: number,
	hs: string[],
): void {
	if (mm === 2 && mp === 1) {
		hs.push("Buddha Day");
	} //Vesak day
	else if (mm === 4 && mp === 1) {
		hs.push("Beginning of Buddhist Lent");
	} //Warso day
	else if (mm === 7 && mp === 1) {
		hs.push("End of Buddhist Lent");
	} else if (my >= 1379 && mm === 7 && (md === 14 || md === 16)) {
		hs.push("Holiday");
	} else if (mm === 8 && mp === 1) {
		hs.push("Tazaungdaing");
	} else if (my >= 1379 && mm === 8 && md === 14) {
		hs.push("Holiday");
	} else if (my >= 1282 && mm === 8 && md === 25) {
		hs.push("National Day");
	} else if (mm === 10 && md === 1) {
		hs.push("Karen New Year's Day");
	} else if (mm === 12 && mp === 1) {
		hs.push("Tabaung Pwe");
	}
}
/**
 * **Get public holidays of Myanmar on Gregorian date**
 * @param year
 * @param month
 * @param day
 * @param hs String array to collect holidays
 */
function gregorianHolidays(
	year: number,
	month: number,
	day: number,
	hs: string[],
): void {
	if (year >= 2018 && year <= 2021 && month === 1 && day === 1) {
		hs.push("New Year's Day");
	} else if (year >= 1948 && month === 1 && day === 4) {
		hs.push("Independence Day");
	} else if (year >= 1947 && month === 2 && day === 12) {
		hs.push("Union Day");
	} else if (year >= 1958 && month === 3 && day === 2) {
		hs.push("Peasants' Day");
	} else if (year >= 1945 && month === 3 && day === 27) {
		hs.push("Armed Forces Day");
	} else if (year >= 1923 && month === 5 && day === 1) {
		hs.push("Labour Day");
	} else if (year >= 1947 && month === 7 && day === 19) {
		hs.push("Martyrs' Day");
	} else if (year >= 1752 && month === 12 && day === 25) {
		hs.push("Christmas");
	} else if (year === 2017 && month === 12 && day === 30) {
		hs.push("Holiday");
	} else if (year >= 2017 && year <= 2021 && month === 12 && day === 31) {
		hs.push("Holiday");
	}
}
/**
 * **Substitute Holiday**
 * @param jdn Julian Day Number
 * @param hs String array to collect holidays
 */
function substituteHoliday(jdn: number, hs: string[]) {
	const holiday = [
		// 2019
		2458768, 2458772, 2458785, 2458800,
		// 2020
		2458855, 2458918, 2458950, 2459051, 2459062, 2459152, 2459156, 2459167,
		2459181, 2459184,
		// 2021
		2459300, 2459303, 2459323, 2459324, 2459335, 2459548, 2459573,
	];
	if (holiday.includes(jdn)) {
		hs.push("Holiday");
	}
}
//TODO add Eid Al Adha Day,  is a public holiday under Section 25 of the Negotiable Instruments Act of the Republic of the Union of Myanmar.

const eidDays: number[] = [
	//2020
	2459063,
];

function eid_day(jdn: number, hs: string[]) {
	if (eidDays.includes(jdn)) {
		hs.push("Eid al-Adha");
	}
}
/**
 * **Get All Public HoliDays**
 * @param {HolidayParams}
 */
function holidays({
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
// -------------------------------- Astro Days ------------------------------------//
// Yatyarzar Pyathada
function yatyaza(mm: number, wd: number): string {
	const a: string[] = ["", "Yatyaza"];
	const m1: number = mm % 4;
	let y = 0;
	const wd1: number = Math.floor(m1 / 2) + 4;
	const wd2: number = (1 - Math.floor(m1 / 2) + (m1 % 2)) * (1 + 2 * (m1 % 2));
	if (wd === wd1 || wd === wd2) y = 1;
	return a[y];
}

function pyathada(mm: number, wd: number): string {
	const a: string[] = ["", "Pyathada", "Afternoon Pyathada"];
	const m1: number = mm % 4;
	let p = 0;
	const wda: number[] = [1, 3, 3, 0, 2, 1, 2];
	if (m1 === 0 && wd === 4) p = 2; //afternoon pyathada
	if (m1 === wda[wd]) p = 1;
	return a[p];
}
function yp(mm: number, wd: number): string | string[] {
	const y = yatyaza(mm, wd);
	const p = pyathada(mm, wd);
	let r: string | string[] = "";
	if (p === "" && y === "") {
		r = "";
	} else if (y !== "" && p !== "") {
		r = [y, p];
	} else if (y === "" && p !== "") {
		r = p;
	} else if (y !== "" && p === "") {
		r = y;
	}
	return r;
}
// Sabbath Nagahle Maharbote Natkhat
function sabbath(md: number, mml: number): string {
	const a: string[] = ["", "Sabbath", "Sabbath Eve"];
	let s = 0;
	if (md === 8 || md === 15 || md === 23 || md === mml) s = 1;
	if (md === 7 || md === 14 || md === 22 || md === mml - 1) s = 2;
	return a[s];
}
function nagahle(mm: number): string {
	const a: string[] = ["West", "North", "East", "South"];
	let m1: number = mm;
	if (mm <= 0) m1 = 4; //first warso is considered warso
	const b: number = Math.floor((m1 % 12) / 3);
	return a[b];
}
function mahabote(my: number, wd: number): string {
	const a: string[] = [
		"Binga",
		"Ahtun",
		"Yaza",
		"Adipati",
		"Marana",
		"Thike",
		"Puti",
	];
	const b: number = (my - wd) % 7;
	return a[b];
}

function natkhat(my: number): string {
	const a: string[] = ["Ogre", "Elf", "Human"];
	const b: number = my % 3;
	return a[b];
}
// -------------------------------------------------------------------------------------
/**
 * Calculate Thamanyo
 * @param mm myanmar month
 * @param wd weekday id
 */
function thamanyo(mm: number, wd: number): number {
	const mmt: number = Math.floor(mm / 13);
	let mm1: number = (mm % 13) + mmt; // to 1-12 with month type
	if (mm1 <= 0) mm1 = 4; //first warso is considered warso (looks no need here)

	const m1: number = mm1 - 1 - Math.floor(mm1 / 9);
	const wd1: number = (m1 * 2 - Math.floor(m1 / 8)) % 7;
	const wd2: number = (wd + 7 - wd1) % 7;

	const thamanyo: number = wd2 <= 1 ? 1 : 0;

	return thamanyo;
}
/**
 * Calculate Thamaphyu
 * @param md myanmar date [1-30]
 * @param wd weekday id
 */
function thamaphyu(md: number, wd: number): number {
	const mf = md % 16; // Calculate fortnight day [0-15]
	let thamaphyu = 0;
	const wda = [1, 2, 6, 6, 5, 6, 7];
	const wdb = [0, 1, 0, 0, 0, 3, 3];

	if (mf === wda[wd] || mf === wdb[wd] || (mf === 4 && wd === 5)) {
		thamaphyu = 1;
	}

	return thamaphyu;
}
function amyeittasote(md: number, wd: number): number {
	const mf: number = md % 16; // Calculate fortnight day [0-15]
	const wda: number[] = [5, 8, 3, 7, 2, 4, 1];
	return mf === wda[wd] ? 1 : 0;
}
function warameittugyi(md: number, wd: number): number {
	const mf: number = md - 15 * Math.floor(md / 16); //get fortnight day [0-15]
	const wda: number[] = [7, 1, 4, 8, 9, 6, 3];
	return mf === wda[wd] ? 1 : 0;
}
function warameittunge(md: number, wd: number): number {
	const mf: number = md - 15 * Math.floor(md / 16); //get fortnight day [0-15]
	const wn: number = (wd + 6) % 7;
	return 12 - mf === wn ? 1 : 0;
}
function yatpote(md: number, wd: number): number {
	const mf: number = md - 15 * Math.floor(md / 16); //get fortnight day [0-15]
	const wda: number[] = [8, 1, 4, 6, 9, 8, 7];
	return mf === wda[wd] ? 1 : 0;
}
function nagapor(md: number, wd: number): number {
	const wda = [26, 21, 2, 10, 18, 2, 21];
	const wdb = [17, 19, 1, 0, 9, 0, 0];

	if (
		md === wda[wd] ||
		md === wdb[wd] ||
		(md === 2 && wd === 1) ||
		((md === 12 || md === 4 || md === 18) && wd === 2)
	) {
		return 1;
	}

	return 0;
}
function yatyotema(mm: number, md: number): number {
	let mm1 = mm % 13 || 13; // Normalize month to 1-12
	if (mm1 <= 0) mm1 = 4; // Consider first warso as warso
	const mf = md % 16; // Get fortnight day [0-15]
	const m1 = mm1 % 2 ? mm1 : (mm1 + 9) % 12;
	const adjustedM1 = ((m1 + 4) % 12) + 1;
	const yatyotema = mf === adjustedM1 ? 1 : 0;
	return yatyotema;
}
function mahayatkyan(mm: number, md: number): number {
	let mm1: number = mm;
	if (mm1 <= 0) mm1 = 4; // Adjust month if less than or equal to 0
	const mf = md % 16; // Calculate fortnight day [0-15]
	let mahayatkyan = 0;
	const m1 = ((Math.floor((mm1 % 12) / 2) + 4) % 6) + 1;
	if (mf === m1) mahayatkyan = 1;
	return mahayatkyan;
}
function shanyat(mm: number, md: number): number {
	const mmt = Math.floor(mm / 13);
	let mm1 = (mm % 13) + mmt; // Adjust month to 1-12 range
	if (mm1 <= 0) mm1 = 4; // Consider first warso as warso
	const mf = md % 16; // Get day within a fortnight [0-15]
	const sya = [8, 8, 2, 2, 9, 3, 3, 5, 1, 4, 7, 4];
	const shanyat = mf === sya[mm1 - 1] ? 1 : 0;
	return shanyat;
}
export function astro(mm: number, md: number, wd: number, hs: string[]): void {
	if (thamanyo(mm, wd)) {
		hs.push("Thamanyo");
	}
	if (amyeittasote(md, wd)) {
		hs.push("Amyeittasote");
	}
	if (warameittugyi(md, wd)) {
		hs.push("Warameittugyi");
	}
	if (warameittunge(md, wd)) {
		hs.push("Warameittunge");
	}
	if (yatpote(md, wd)) {
		hs.push("Yatpote");
	}
	if (thamaphyu(md, wd)) {
		hs.push("Thamaphyu");
	}
	if (nagapor(md, wd)) {
		hs.push("Nagapor");
	}
	if (yatyotema(mm, md)) {
		hs.push("Yatyotema");
	}
	if (mahayatkyan(mm, md)) {
		hs.push("Mahayatkyan");
	}
	if (shanyat(mm, md)) {
		hs.push("Shanyat");
	}
}
// --------------------------
function astroDays({ my, mm, mml, md, wd }: AstroParams) {
	const asd = (hs: string[]): void => astro(mm, md, wd, hs);
	const ypy: string | string[] = yp(mm, wd);
	const sbd: string = sabbath(md, mml);
	const ngl: string = nagahle(mm);
	const mhb: string = mahabote(my, wd);
	const nkt: string = natkhat(my);
	return {
		asd,
		ypy,
		sbd,
		ngl,
		mhb,
		nkt,
	};
}
// ---------------------------------- Utility Helpers-----------------------------------------
const utils: Utils = {
	SG: 2361222,
	UNIX: 2440587.5,

	secularDiff(year: number): number {
		return Math.floor(year / 100) - Math.floor(year / 400) - 2;
	},
	isLeapYear(year: number): boolean {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	},
	monthsDaysArray(year: number): number[] {
		const ms: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		const ml: number[] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return utils.isLeapYear(year) ? ml : ms;
	},
	uniqNumber(obj: number[]): number[] {
		return Array.from(new Set(obj));
	},
	uniqString(obj: string[]): string[] {
		return Array.from(new Set(obj));
	},
	Tnum(a: number, lang?: Languages): string | number {
		const l: Languages = lang ?? "English";
		const b: string[] = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];
		let r: number | string;
		if (l === "English") {
			r = a;
		} else {
			const aa: string[] = a.toString().split("");
			const bb: string[] = [];
			aa.map((i) => {
				const x: string = b[Number.parseInt(i)];
				bb.push(x);
			});
			r = bb.join("");
		}
		return r;
	},
	Tstr(str: string | string[], array: string[][], lang?: Languages) {
		const l: Languages = lang ?? "English";
		let r: string | string[] = "";
		if (l === "English") {
			r = str;
		} else {
			if (Array.isArray(str)) {
				const y: string[] = [];
				str.map((i) => {
					const z = array.filter((k) => k[0] === i);
					y.push(z[0][1]);
				});
				r = y;
			} else {
				const x = array.find((i) => i[0] === str);
				r = x ? x[1] : "";
			}
		}
		return r;
	},
	des2hms(des: number): {
		hour: number;
		minute: number;
		second: number;
	} {
		const a = Math.floor(des);
		const b = des - a;
		const c = b * 24;
		const hour: number = Math.floor(c);
		const d = (c - hour) * 60;
		const minute = Math.floor(d);
		const e = (d - minute) * 60;
		const second = Math.floor(e);
		return { hour, minute, second };
	},
	hms2des(hour: number, minute: number, second: number): number {
		return hour / 24 + minute / 1440 + second / 86400;
	},
};
// ----------------------------------------------------------------------------------------------------------
/**
 * Julian Day Number to Myanmar Calendar Info
 * @param jdn julian day number
 * @returns object of Myanmar Calendar Info.
 */
function jtm(jdn: number): JTM {
	const a = bcc.j2m(jdn);
	const myt: number = a.myt;
	const my: number = a.my;
	const mm: number = a.mm;
	const md: number = a.md;
	//
	const mp: number = bcc.mp(myt, mm, md);
	const mf: number = bcc.mf(md);
	const ssy: number = bcc.by(my);
	const mmt: number = Math.floor(mm / 13);
	//
	const mm_str: string = MyMonthName[mm];
	const mp_str: string = MoonPhase[mp];
	const wd = (jdn + 2) % 7;
	const mml = bcc.mml(myt, mm);
	return { myt, ssy, my, mm_str, md, mp_str, mf, mmt, mp, mm, wd, mml };
}
// -------------------------------------------------------------------------- //

export class MyCal extends MyMoon {
	private _lang: Languages = "English";
	private _yearCal: number = this.year;
	private _monthCal = 0;
	private _dateCal = 0;
	private _cal(): YearObject {
		const ma: number[] = utils.monthsDaysArray(this._yearCal);
		const yrObj: YearObject = {
			year: this._yearCal,
			/* cspell:disable */
			sasana_years: [],
			myanmar_years: [],
			month_object: [],
		};
		//_ssy
		let _ssy: string | number = "";
		const systr: string[] = [];
		const synum: number[] = [];
		//_mmy
		let _mmy: string | number = "";
		const mystr: string[] = [];
		const mynum: number[] = [];
		// ========================== //
		//     Start of Months loop     //
		// ========================== //
		for (let i = 0; i < 12; i++) {
			const dim: number = ma[i];
			const moObj: MonthObject = {
				year: this._yearCal,
				id: i + 1,
				month_long: MONTHS[i],
				month_short: MO[i],
				sasana_years: [],
				myanmar_years: [],
				myanmar_months: [],
				date_object: [],
			};
			//_mmm
			const mmmstr: string[] = [];
			// ========================== //
			//     Start of Days loop     //
			// ========================== //
			for (let j = 0; j < dim; j++) {
				const mo: number = i + 1;
				const da: number = j + 1;
				const a: number = MyCal.dateTime2Julian(
					this._yearCal,
					mo,
					da,
					12,
					0,
					0,
					this._ct,
				).jdn;
				const mm: JTM = jtm(a);
				// wd id
				const wd_id = mm.wd - 1;
				const wdid = wd_id === -1 ? 6 : wd_id;
				const as: Astro = astroDays({
					my: mm.my,
					mm: mm.mm,
					mml: mm.mml,
					md: mm.md,
					wd: mm.wd,
				});
				// _mmm
				mmmstr.push(utils.Tstr(mm.mm_str, langs, this._lang) as string);
				// _ssy
				_ssy = utils.Tnum(mm.ssy, this._lang);
				if (typeof _ssy === "string") {
					systr.push(_ssy);
				} else if (typeof _ssy === "number") {
					synum.push(_ssy);
				}
				// _mmy
				_mmy = utils.Tnum(mm.my, this._lang);
				if (typeof _mmy === "string") {
					mystr.push(_mmy);
				} else if (typeof _mmy === "number") {
					mynum.push(_mmy);
				}
				const dObj: DateObject = {
					year: this._yearCal,
					month: MONTHS[i],
					date: j + 1,
					weekday_long: WEEK_DAYS[wdid],
					weekday_short: WD[wdid],
					wd_id: wdid,
					month_id: i + 1,
					jdn: a,
					mmcal: {
						sasana_year: utils.Tnum(mm.ssy, this._lang),
						myanmar_year: utils.Tnum(mm.my, this._lang),
						myanmar_month: utils.Tstr(mm.mm_str, langs, this._lang) as string,
						moon_phase: utils.Tstr(mm.mp_str, langs, this._lang) as string,
						fortnight_date: utils.Tnum(mm.mf, this._lang),
						myanmar_date: utils.Tnum(mm.md, this._lang),
						yatyaza_pyathada: utils.Tstr(as.ypy, langs, this._lang),
						mahabote: utils.Tstr(as.mhb, langs, this._lang) as string,
						nagahle: utils.Tstr(as.ngl, langs, this._lang) as string,
						nakhat: utils.Tstr(as.nkt, langs, this._lang) as string,
						sabbath: utils.Tstr(as.sbd, langs, this._lang) as string,
						astro_days: [],
						public_holiday: [],
					},
				};
				// TODO - translation of astro-days and holidays
				// temp storage for astro days
				const asd_array: string[] = [];
				// push astro days to temp storage
				as.asd(asd_array);
				// temp storage for holidays
				const hld_array: string[] = [];
				// push holidays to temp storage
				holidays({
					jdn: a,
					year: this._yearCal,
					month: mo,
					day: da,
					mp: mm.mp,
					mmt: mm.mmt,
					my: mm.my,
					mm: mm.mm,
					md: mm.md,
					hs: hld_array,
				});
				// translate astro days from temp storage and push to day object
				dObj.mmcal.astro_days = utils.Tstr(
					asd_array,
					langs,
					this._lang,
				) as string[];
				// translate astro days from temp storage and push to day object
				dObj.mmcal.public_holiday = utils.Tstr(
					hld_array,
					langs,
					this._lang,
				) as string[];
				// TODO end
				// push day object to month object before end of days loop
				moObj.date_object.push(dObj);
				// ========================== //
				//     End of Days loop     //
				// ========================== //
			}
			// remove all duplicate values from string or number arrays of month object push by days loop
			const msa: string[] = utils.uniqString(mmmstr);
			moObj.myanmar_months = [...msa];
			moObj.sasana_years =
				typeof _ssy === "string"
					? utils.uniqString(systr)
					: utils.uniqNumber(synum);
			moObj.myanmar_years =
				typeof _mmy === "string"
					? utils.uniqString(mystr)
					: utils.uniqNumber(mynum);
			// push month object to year object
			yrObj.month_object.push(moObj);
			// ========================== //
			//     End of Months loop     //
			// ========================== //
		}
		// remove all duplicate values from string or number arrays of year object push by  days and months loops
		yrObj.sasana_years =
			typeof _ssy === "string"
				? utils.uniqString(systr)
				: utils.uniqNumber(synum);
		yrObj.myanmar_years =
			typeof _mmy === "string"
				? utils.uniqString(mystr)
				: utils.uniqNumber(mynum);
		return yrObj;
	}
	public res() {
		if (this._monthCal !== 0 && this._dateCal === 0) {
			return this._cal().month_object[this._monthCal - 1];
		}
		if (this._monthCal !== 0 && this._dateCal !== 0) {
			return this._cal().month_object[this._monthCal - 1].date_object[
				this._dateCal - 1
			];
		}
		return this._cal();
	}
	// for calendar month view
	public calMontView(
		year: number,
		month: number,
		lang: Languages,
	): {
		ssys: string[] | number[];
		mys: string[] | number[];
		mo: MonthObject;
	} {
		this._yearCal = year;
		this._monthCal = month;
		this._lang = lang;
		const yo: YearObject = this._cal();
		const ssys: string[] | number[] = yo.sasana_years;
		const mys: string[] | number[] = yo.myanmar_years;
		const mo: MonthObject = yo.month_object[month - 1];
		return {
			ssys,
			mys,
			mo,
		};
	}
	public set yearForCalendar(year: number) {
		this._yearCal = year;
	}
	public get yearForCalendar() {
		return this._yearCal;
	}
	public set monthForCalendar(month: number) {
		this._monthCal = month;
	}
	public get monthForCalendar(): number {
		return this._monthCal;
	}
	public set dateForCalendar(date: number) {
		this._dateCal = date;
	}
	public get dateForCalendar(): number {
		return this._dateCal;
	}
	public set lang(lang: Languages) {
		this._lang = lang;
	}
	public get lang() {
		return this._lang;
	}
}
