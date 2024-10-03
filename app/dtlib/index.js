function _defineProperty(a, b, c) {
	return (
		(b = _toPropertyKey(b)) in a
			? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0,
				})
			: (a[b] = c),
		a
	);
}
function _toPropertyKey(a) {
	var b = _toPrimitive(a, "string");
	return "symbol" == typeof b ? b : b + "";
}
function _toPrimitive(a, b) {
	if ("object" != typeof a || !a) return a;
	var c = a[Symbol.toPrimitive];
	if (void 0 !== c) {
		var d = c.call(a, b || "default");
		if ("object" != typeof d) return d;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === b ? String : Number)(a);
} //
// ----------------- Lists
export var TimeZ = {
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
export var timeZones = [
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
var langs = [
		["Sunday", "\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031"],
		["Monday", "\u1010\u1014\u1004\u103A\u1039\u101C\u102C"],
		["Tuesday", "\u1021\u1004\u103A\u1039\u1002\u102B"],
		["Wednesday", "\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038"],
		["Thursday", "\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038"],
		["Friday", "\u101E\u1031\u102C\u1000\u103C\u102C"],
		["Saturday", "\u1005\u1014\u1031"], //
		["January", "\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E"],
		[
			"February",
			"\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E",
		],
		["March", "\u1019\u1010\u103A"],
		["April", "\u1027\u1015\u103C\u102E"],
		["May", "\u1019\u1031"],
		["June", "\u1007\u103D\u1014\u103A"],
		["July", "\u1007\u1030\u101C\u102D\u102F\u1004\u103A"],
		["August", "\u1029\u1002\u102F\u1010\u103A"],
		["September", "\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C"],
		["October", "\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C"],
		["November", "\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C"],
		["December", "\u1012\u102E\u1007\u1004\u103A\u1018\u102C"], //
		["Tagu", "\u1010\u1014\u103A\u1001\u1030\u1038"],
		["Kason", "\u1000\u1006\u102F\u1014\u103A"],
		["Nayon", "\u1014\u101A\u102F\u1014\u103A"],
		["Waso", "\u101D\u102B\u1006\u102D\u102F"],
		["Wagaung", "\u101D\u102B\u1001\u1031\u102B\u1004\u103A"],
		["Tawthalin", "\u1010\u1031\u102C\u103A\u101E\u101C\u1004\u103A\u1038"],
		[
			"Thadingyut",
			"\u101E\u102E\u1010\u1004\u103A\u1038\u1000\u103B\u103D\u1010\u103A",
		],
		[
			"Tazaungmon",
			"\u1010\u1014\u103A\u1006\u1031\u102C\u1004\u103A\u1019\u102F\u1014\u103A\u1038",
		],
		["Nadaw", "\u1014\u1010\u103A\u1010\u1031\u102C\u103A"],
		["Pyatho", "\u1015\u103C\u102C\u101E\u102D\u102F"],
		["Tabodwe", "\u1010\u1015\u102D\u102F\u1037\u1010\u103D\u1032"],
		["Tabaung", "\u1010\u1015\u1031\u102B\u1004\u103A\u1038"],
		["First Waso", "\u1015-\u101D\u102B\u1006\u102D\u102F"],
		[
			"Late Tagu",
			"\u1014\u103E\u1031\u102C\u1004\u103A\u1038\u1010\u1014\u103A\u1001\u1030\u1038",
		],
		[
			"Late Kason",
			"\u1014\u103E\u1031\u102C\u1004\u103A\u1038\u1000\u1006\u102F\u1014\u103A",
		], //
		["Waxing", "\u101C\u1006\u1014\u103A\u1038"],
		["Waning", "\u101C\u1006\u102F\u1010\u103A"],
		["Full Moon", "\u101C\u1015\u103C\u100A\u103A\u1037"],
		["New Moon", "\u101C\u1000\u103D\u101A\u103A"], //
		["East", "\u1021\u101B\u103E\u1031\u1037"],
		["West", "\u1021\u1014\u1031\u102C\u1000\u103A"],
		["South", "\u1010\u1031\u102C\u1004\u103A"],
		["North", "\u1019\u103C\u1031\u102C\u1000\u103A"], //
		["Binga", "\u1018\u1004\u103A\u1039\u1002"],
		["Atun", "\u1021\u1011\u103D\u1014\u103A\u1038"],
		["Yaza", "\u101B\u102C\u1007"],
		["Adipati", "\u1021\u1013\u102D\u1015\u1010\u102D"],
		["Marana", "\u1019\u101B\u100F"],
		["Thike", "\u101E\u102D\u102F\u1000\u103A"],
		["Puti", "\u1015\u102F\u1010\u102D"], //
		[
			"Amyeittasote",
			"\u1021\u1019\u103C\u102D\u1010\u1039\u1010\u1005\u102F\u1010\u103A",
		],
		[
			"Warameittugyi",
			"\u101D\u102B\u101B\u1019\u102D\u1010\u1039\u1010\u102F\u1000\u103C\u102E\u1038",
		],
		[
			"Warameittunge",
			"\u101D\u102B\u101B\u1019\u102D\u1010\u1039\u1010\u102F\u1004\u101A\u103A",
		],
		["Thamaphyu", "\u101E\u1019\u102C\u1038\u1016\u103C\u1030"],
		["Thamanyo", "\u101E\u1019\u102C\u1038\u100A\u102D\u102F"],
		["Yatpote", "\u101B\u1000\u103A\u1015\u102F\u1015\u103A"],
		["Yatyotema", "\u101B\u1000\u103A\u101A\u102F\u1010\u103A\u1019\u102C"],
		[
			"Mahayatkyan",
			"\u1019\u101F\u102C\u101B\u1000\u103A\u1000\u103C\u1019\u103A\u1038",
		],
		["Nagapor", "\u1014\u1002\u102B\u1038\u1015\u1031\u102B\u103A"],
		["Shanyat", "\u101B\u103E\u1019\u103A\u1038\u101B\u1000\u103A"], //
		["Ogre", "\u1018\u102E\u101C\u1030\u1038"],
		["Elf", "\u1014\u1010\u103A"],
		["Human", "\u101C\u1030"], //
		["Sabbath Eve", "\u1021\u1016\u102D\u1010\u103A"],
		["Sabbath", "\u1025\u1015\u102F\u101E\u103A"], //
		["Yatyaza", "\u101B\u1000\u103A\u101B\u102C\u1007\u102C"],
		["Pyathada", "\u1015\u103C\u103F\u1012\u102B\u1038"],
		[
			"Afternoon Pyathada",
			"\u1019\u103D\u1014\u103A\u1038\u101C\u103D\u1032\u1015\u103C\u103F\u1012\u102B\u1038",
		], //
		[
			"Independence Day",
			"\u101C\u103D\u1010\u103A\u101C\u1015\u103A\u101B\u1031\u1038\u1014\u1031\u1037",
		],
		[
			"Union Day",
			"\u1015\u103C\u100A\u103A\u1011\u1031\u102C\u1004\u103A\u1005\u102F\u1014\u1031\u1037",
		],
		[
			"Peasants' Day",
			"\u1010\u1031\u102C\u1004\u103A\u101E\u1030\u101C\u101A\u103A\u101E\u1019\u102C\u1038\u1014\u1031\u1037",
		],
		[
			"Labour Day",
			"\u1021\u101C\u102F\u1015\u103A\u101E\u1019\u102C\u1038\u1014\u1031\u1037",
		],
		[
			"Martyrs' Day",
			"\u1021\u102C\u1007\u102C\u1014\u100A\u103A\u1014\u1031\u1037",
		],
		[
			"Holiday",
			"\u101B\u102F\u1036\u1038\u1015\u102D\u1010\u103A\u101B\u1000\u103A",
		],
		[
			"Armed Forces Day",
			"\u1010\u1015\u103A\u1019\u1010\u1031\u102C\u103A\u1014\u1031\u1037",
		],
		[
			"New Year's Day",
			"\u1014\u103E\u1005\u103A\u101E\u1005\u103A\u1000\u1030\u1038\u101B\u102F\u1036\u1038\u1015\u102D\u1010\u103A\u101B\u1000\u103A",
		],
		[
			"Christmas",
			"\u1001\u101B\u1005\u1039\u1005\u1019\u1010\u103A\u1014\u1031\u1037",
		], //
		[
			"Burmese New Year's Day",
			"\u1014\u103E\u1005\u103A\u1006\u1014\u103A\u1038",
		],
		[
			"Thingyan Atat",
			"\u101E\u1004\u103A\u1039\u1000\u103C\u1014\u103A\u1021\u1010\u1000\u103A\u1014\u1031\u1037",
		],
		[
			"Thingyan Akyat",
			"\u101E\u1004\u103A\u1039\u1000\u103C\u1014\u103A\u1021\u1000\u103C\u1010\u103A\u1014\u1031\u1037",
		],
		[
			"Thingyan Akya",
			"\u101E\u1004\u103A\u1039\u1000\u103C\u1014\u103A\u1021\u1000\u103B\u1014\u1031\u1037",
		],
		[
			"Thingyan Akyo",
			"\u101E\u1004\u103A\u1039\u1000\u103C\u1014\u103A\u1021\u1000\u103C\u102D\u102F\u1014\u1031\u1037",
		], //
		["Eid al-Adha", "\u1021\u102D\u1012\u103A\u1014\u1031\u1037"],
		["Deepavali", "\u1012\u102E\u101D\u102B\u101C\u102E"], //
		["Buddha Day", "\u1017\u102F\u1012\u1039\u1013\u1014\u1031\u1037"],
		[
			"Beginning of Buddhist Lent",
			"\u1013\u1019\u1039\u1019\u1005\u1000\u103C\u102C\u1014\u1031\u1037",
		],
		[
			"End of Buddhist Lent",
			"\u101E\u102E\u1010\u1004\u103A\u1038\u1000\u103B\u103D\u1010\u103A\u1019\u102E\u1038\u1011\u103D\u1014\u103A\u1038\u1015\u103D\u1032",
		],
		[
			"Tazaungdaing",
			"\u1010\u1014\u103A\u1006\u1031\u102C\u1004\u103A\u1010\u102D\u102F\u1004\u103A",
		],
		[
			"National Day",
			"\u1021\u1019\u103B\u102D\u102F\u1038\u101E\u102C\u1038\u1014\u1031\u1037",
		],
		[
			"Karen New Year's Day",
			"\u1000\u101B\u1004\u103A\u1014\u103E\u1005\u103A\u101E\u1005\u103A\u1000\u1030\u1038",
		],
		[
			"Tabaung Pwe",
			"\u1010\u1015\u1031\u102B\u1004\u103A\u1038\u1015\u103D\u1032",
		],
	],
	MyMonthName = [
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
	],
	MoonPhase = ["Waxing", "Full Moon", "Waning", "New Moon"],
	MONTHS = [
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
	],
	MO = MONTHS.map((a) => a.split("").slice(0, 3).join("")),
	WEEK_DAYS = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	],
	WD = WEEK_DAYS.map((a) => a.split("").slice(0, 3).join("")); /**
 * List of Myanmer month name
 *//**
 * Moon Phases
 *//**
 * Name of Months
 *//**
 * List of short month name
 *//**
 * Weekday Name
 *//**
 * Weekday shorts
 */ //
export class MyJulian {
	constructor(a, b, c) {
		(this._ct = null !== c && void 0 !== c ? c : "Gregorian"),
			(this._tz = null !== b && void 0 !== b ? b : "UTC+00:00"),
			(this._jd = null !== a && void 0 !== a ? a : this.jdnow());
	} /**
	 * Returns the secular difference between the Julian period and the Gregorian
	 * period, given a year.
	 * @param year The year for which to calculate the secular difference.
	 * @returns The secular difference between the Julian period and the Gregorian
	 * period, for the given year.
	 */
	static secularDiff(a) {
		var b = Math.floor;
		return b(a / 100) - b(a / 400) - 2;
	} /**
	 * Convert a Unix timestamp (in seconds) to a Julian Date.
	 * @param unix Unix timestamp in seconds.
	 * @returns Julian Date.
	 */
	static unix2jd(a) {
		return 2440587.5 + a / 86400;
	} /**
	 * Convert a Julian Date to a Unix timestamp (in seconds).
	 * @param jd Julian Date.
	 * @returns Unix timestamp in seconds.
	 */
	static jd2unix(a) {
		return 86400 * (a - 2440587.5) + 0.5;
	} /**
	 * Return the current UTC Julian Date.
	 * @returns The current UTC Julian Date.
	 */
	static jdutc() {
		var a = new Date(),
			b = a.getTime() / 1e3;
		return MyJulian.unix2jd(b);
	} /**
	 * Return the current Julian Date in Yangon, Myanmar.
	 * @returns The current Julian Date in Yangon, Myanmar.
	 */
	static jdmm() {
		var a = TimeZ["UTC+06:30"];
		return MyJulian.jdutc() + a / 24;
	} /**
	 * Return the current Julian Date in the time zone of this instance.
	 * @returns The current Julian Date in the time zone of this instance.
	 */
	jdnow() {
		var a = TimeZ[this._tz];
		return MyJulian.jdutc() + a / 24;
	} /**
	 * Convert a Julian Date to a date and time in a specific time zone.
	 * @param jd The Julian Date to convert.
	 * @param tz The time zone offset in hours to use for the conversion. If not
	 * provided, this defaults to 0 (UTC).
	 * @returns An object with the following properties: year, month, day, hour,
	 * minute, second.
	 */
	static jd2dt(d, e) {
		var f = Math.floor,
			g = null !== e && void 0 !== e ? e : "UTC+00:00",
			h = TimeZ[g],
			i = d + h / 24,
			k = Math.round(i),
			l = 4 * k - 6884477,
			a = f(l / 146097),
			m = 100 * f((l % 146097) / 4) + 99,
			b = f(m / 36525),
			n = 5 * f((m % 36525) / 100) + 2,
			c = f(n / 153),
			o = f((c + 2) / 12),
			p = f((n % 153) / 5) + 1,
			q = f(i),
			j = i - q,
			r = 0.5 <= j ? (86400 * j - 43200) / 3600 : (86400 * j + 43200) / 3600,
			s = f(r),
			t = (3600 * (r - s)) / 60,
			u = f(t),
			v = f(60 * (t - u)); // JDN to Year Month Date
		// decimal fraction of JD to Hour Minute Second
		return {
			year: 100 * a + b + o,
			month: c - 12 * o + 3,
			day: p,
			hour: s,
			minute: u,
			second: v,
		};
	} /**
	 * Convert a Julian Day to a date-time object.
	 *
	 * @param jd The Julian Day to convert.
	 * @param tz The timezone offset in hours. Defaults to 0 (UTC).
	 * @param ct The calendar type. Defaults to "Gregorian".
	 * @returns An object with the following properties: year, month, date, hour, minute, second, and string.
	 * The string property is a string representation of the date and time in the format "Month Day, Year Hour:Minute:Second".
	 */
	static jd2DateTime(a, b, c) {
		var d = null !== b && void 0 !== b ? b : "UTC+00:00",
			e = null !== c && void 0 !== c ? c : "Gregorian",
			f = MyJulian.jd2dt(a, d),
			g = MyJulian.jd2dt(a - MyJulian.secularDiff(f.year), d),
			i = "Julian" === e || ("British" === e && a < MyJulian._sg) ? g : f,
			j = [
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
			][i.month - 1],
			k = 1 === i.hour.toString().length ? "0" + i.hour : "" + i.hour,
			h = 1 === i.minute.toString().length ? "0" + i.minute : "" + i.minute,
			l = 1 === i.second.toString().length ? "0" + i.second : "" + i.second,
			m = j + " " + i.day + " , " + i.year + " , " + k + ":" + h + ":" + l;
		return {
			year: i.year,
			month: i.month,
			date: i.day,
			hour: i.hour,
			minute: i.minute,
			second: i.second,
			string: m,
		};
	} /**
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
	static dateTime2Julian(b, c, e, f, g, i, j) {
		var k = Math.floor,
			l = null !== f && void 0 !== f ? f : 12,
			h = null !== g && void 0 !== g ? g : 0,
			m = null !== i && void 0 !== i ? i : 0,
			n = null !== j && void 0 !== j ? j : "Gregorian",
			o = MyJulian.secularDiff(b),
			d = k((c - 3) / 12),
			a = b + d,
			p = k(a / 100),
			q =
				k((146097 * p) / 4) +
				k((36525 * (a % 100)) / 100) +
				k((153 * (c - 12 * d - 3) + 2) / 5) +
				e +
				1721119,
			r = q + ((l - 12) / 24 + h / 1440 + m / 86400),
			s = "Julian" === n || ("British" === n && r < MyJulian._sg) ? r + o : r,
			t = Math.round(s); // setting default values
		// To decimal fraction of the day
		// h , m , s
		// pre jdn
		// pre jd with decimal fraction of h,m,s and local tz offset, given tz offset
		// check calendar type and if pre jd lass than 2361222 + secular difference
		// Gregorian date 1752-Sep-14 JDN = 2361222
		// make sure jdn with tz and calendar type
		return { jd: s, jdn: t };
	}
	utcTime() {
		var a = new Date(),
			b = a.getUTCFullYear(),
			c = a.getUTCMonth(),
			d = a.getUTCDate(),
			e = a.getUTCHours(),
			f = a.getUTCMinutes(),
			g = a.getUTCSeconds();
		return { year: b, month: c, date: d, hour: e, minute: f, second: g };
	}
	set jd(a) {
		this._jd = a;
	}
	get jd() {
		return this._jd;
	}
	get jdn() {
		return Math.round(this._jd);
	}
	set tz(a) {
		this._tz = a;
	}
	get tz() {
		return this._tz;
	}
	set ct(a) {
		this._ct = a;
	}
	get ct() {
		return this._ct;
	} /**
	 * Gets the year of this date in the Gregorian calendar.
	 * @returns The year of this date in the Gregorian calendar.
	 */
	get year() {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).year;
	}
	get month() {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).month;
	}
	get date() {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).date;
	}
	get hour() {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).hour;
	}
	get minute() {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).minute;
	}
	get second() {
		return MyJulian.jd2DateTime(this._jd, this._tz, this._ct).second;
	}
	getwd() {
		var a = (this.jdn + 2) % 7,
			b = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"][a];
		return { wdid: a, str: b };
	}
	get wd() {
		return this.getwd().wdid;
	}
	get wdstr() {
		return this.getwd().str;
	}
	get utcjdNow() {
		return MyJulian.jdutc();
	}
	get mmjdNow() {
		return MyJulian.jdmm();
	}
	get utcYear() {
		return this.utcTime().year;
	}
	get utcMonth() {
		return this.utcTime().month;
	}
	get utcDate() {
		return this.utcTime().date;
	}
	get utcHour() {
		return this.utcTime().hour;
	}
	get utcMinute() {
		return this.utcTime().minute;
	}
	get utcSecond() {
		return this.utcTime().second;
	}
}
_defineProperty(MyJulian, "_sg", 2361222);
export class MyMoon extends MyJulian {
	static mod360(a) {
		var b = a % 360;
		return 0 > b && (b += 360), b;
	}
	static getCycle(a, b) {
		//Estimate fraction of year
		return Math.floor(12.3685 * (a + (30 * b + 15) / 365 - 2e3));
	}
	static phaseDate(a, b) {
		var c = Math.cos,
			d = Math.sin,
			e = Math.PI,
			f = a + b,
			g = e / 180,
			h = f / 1236.85,
			i =
				2451550.09766 +
				29.530588861 * f +
				15437e-8 * h * h -
				15e-8 * h * h * h +
				73e-11 * h * h * h * h,
			j = 1 - 0.002516 * h - 74e-7 * h * h,
			k =
				MyMoon.mod360(
					2.5534 + 29.1053567 * f - 14e-7 * h * h - 11e-8 * h * h * h,
				) * g,
			l =
				MyMoon.mod360(
					201.5643 +
						385.81693528 * f +
						0.0107582 * h * h +
						1238e-8 * h * h * h -
						58e-9 * h * h * h * h,
				) * g,
			m =
				MyMoon.mod360(
					160.7108 +
						390.67050284 * f -
						0.0016118 * h * h -
						227e-8 * h * h * h +
						11e-9 * h * h * h * h,
				) * g,
			n =
				MyMoon.mod360(
					124.7746 - 1.56375588 * f + 0.0020672 * h * h + 215e-8 * h * h * h,
				) * g,
			o = MyMoon.mod360(299.77 + 0.107408 * f - 0.009173 * h * h) * g,
			p = MyMoon.mod360(251.88 + 0.016321 * f) * g,
			q = MyMoon.mod360(251.83 + 26.651886 * f) * g,
			r = MyMoon.mod360(349.42 + 36.412478 * f) * g,
			s = MyMoon.mod360(84.66 + 18.206239 * f) * g,
			t = MyMoon.mod360(141.74 + 53.303771 * f) * g,
			u = MyMoon.mod360(207.14 + 2.453732 * f) * g,
			v = MyMoon.mod360(154.84 + 7.30686 * f) * g,
			w = MyMoon.mod360(34.52 + 27.261239 * f) * g,
			x = MyMoon.mod360(207.19 + 0.121824 * f) * g,
			y = MyMoon.mod360(291.34 + 1.844379 * f) * g,
			z = MyMoon.mod360(161.72 + 24.198154 * f) * g,
			A = MyMoon.mod360(239.56 + 25.513099 * f) * g,
			B = MyMoon.mod360(331.55 + 3.592518 * f) * g,
			C = 0; // phase - 0 = new, .25 = first quarter, .5 = full, .75 = last quarter, all other values are invalid
		//From Meeus ch49
		//49.3
		//49.1
		//47.6
		//49.4
		//49.5
		//49.6
		//49.7
		//P351-352
		if (0 === b)
			C =
				2e-5 * d(4 * l) +
				-2e-5 * d(3 * l + k) +
				-2e-5 * d(l - k - 2 * m) +
				3e-5 * d(l - k + 2 * m) +
				-3e-5 * d(l + k + 2 * m) +
				3e-5 * d(2 * l + 2 * m) +
				3e-5 * d(l + k - 2 * m) +
				4e-5 * d(3 * k) +
				4e-5 * d(2 * l - 2 * m) +
				-7e-5 * d(l + 2 * k) +
				-17e-5 * d(n) +
				-24e-5 * j * d(2 * l - k) +
				38e-5 * j * d(k - 2 * m) +
				42e-5 * j * d(k + 2 * m) +
				-42e-5 * d(3 * l) +
				56e-5 * j * d(2 * l + k) +
				-57e-5 * d(l + 2 * m) +
				-0.00111 * d(l - 2 * m) +
				0.00208 * j * j * d(2 * k) +
				-0.00514 * j * d(l + k) +
				0.00739 * j * d(l - k) +
				0.01039 * d(2 * m) +
				0.01608 * d(2 * l) +
				0.17241 * j * d(k) +
				-0.4072 * d(l);
		else if (0.25 === b || 0.75 === b) {
			C =
				-2e-5 * d(3 * l + k) +
				2e-5 * d(l - k + 2 * m) +
				2e-5 * d(2 * l - 2 * m) +
				3e-5 * d(3 * k) +
				3e-5 * d(l + k - 2 * m) +
				4e-5 * d(l - 2 * k) +
				-4e-5 * d(l + k + 2 * m) +
				4e-5 * d(2 * l + 2 * m) +
				-5e-5 * d(l - k - 2 * m) +
				-17e-5 * d(n) +
				27e-5 * j * d(2 * l + k) +
				-28e-5 * j * j * d(l + 2 * k) +
				32e-5 * j * d(k - 2 * m) +
				32e-5 * j * d(k + 2 * m) +
				-34e-5 * j * d(2 * l - k) +
				-4e-4 * d(3 * l) +
				-7e-4 * d(l + 2 * m) +
				-0.0018 * d(l - 2 * m) +
				0.00204 * j * j * d(2 * k) +
				0.00454 * j * d(l - k) +
				0.00804 * d(2 * m) +
				0.00862 * d(2 * l) +
				-0.01183 * j * d(l + k) +
				0.17172 * j * d(k) +
				-0.62801 * d(l);
			var D =
				0.00306 -
				38e-5 * j * c(k) +
				26e-5 * c(l) -
				2e-5 * c(l - k) +
				2e-5 * c(l + k) +
				2e-5 * c(2 * m);
			0.25 === b ? (C += D) : (C -= D);
		} else
			0.5 === b &&
				(C =
					2e-5 * d(4 * l) +
					-2e-5 * d(3 * l + k) +
					-2e-5 * d(l - k - 2 * m) +
					3e-5 * d(l - k + 2 * m) +
					-3e-5 * d(l + k + 2 * m) +
					3e-5 * d(2 * l + 2 * m) +
					3e-5 * d(l + k - 2 * m) +
					4e-5 * d(3 * k) +
					4e-5 * d(2 * l - 2 * m) +
					-7e-5 * d(l + 2 * k) +
					-17e-5 * d(n) +
					-24e-5 * j * d(2 * l - k) +
					38e-5 * j * d(k - 2 * m) +
					42e-5 * j * d(k + 2 * m) +
					-42e-5 * d(3 * l) +
					56e-5 * j * d(2 * l + k) +
					-57e-5 * d(l + 2 * m) +
					-0.00111 * d(l - 2 * m) +
					0.00209 * j * j * d(2 * k) +
					-0.00514 * j * d(l + k) +
					0.00734 * j * d(l - k) +
					0.01043 * d(2 * m) +
					0.01614 * d(2 * l) +
					0.17302 * j * d(k) +
					-0.40614 * d(l));
		return (
			(i += C),
			(C =
				325e-6 * d(o) +
				165e-6 * d(p) +
				164e-6 * d(q) +
				126e-6 * d(r) +
				11e-5 * d(s) +
				62e-6 * d(t) +
				6e-5 * d(u) +
				56e-6 * d(v) +
				47e-6 * d(w) +
				42e-6 * d(x) +
				4e-5 * d(y) +
				37e-6 * d(z) +
				35e-6 * d(A) +
				23e-6 * d(B)),
			(i += C),
			i
		);
	}
	static calMoonPhases(a, b) {
		var c = MyMoon.getCycle(a, b),
			d = MyMoon.phaseDate(c, 0),
			e = MyMoon.phaseDate(c, 0.25),
			f = MyMoon.phaseDate(c, 0.5),
			g = MyMoon.phaseDate(c, 0.75);
		return { new: d, fq: e, full: f, lq: g };
	}
	static fullMoonDays(a) {
		var b = Array(12)
			.fill(0)
			.map((b, c) => MyMoon.calMoonPhases(a, c));
		return b.map(
			(a) => MyMoon.jd2DateTime(a.full, "UTC+00:00", "Gregorian").string,
		);
	}
	moon_age() {
		// tz offset of this to fraction of day
		var a = TimeZ[this._tz] / 24,
			b = this.utcYear,
			c = this.utcMonth,
			d = c - 1,
			e = c + 1,
			g = []; // set time zone as GMT
		// last and next month
		// sometime 2 new moon days in one month , store nm to an array
		// recent month NMs
		g.push(MyMoon.calMoonPhases(b, c).new); // prev month NMs
		var h = [MyMoon.calMoonPhases(b, d).new],
			j = []; // next month NMs
		j.push(MyMoon.calMoonPhases(b, e).new); // set jd for now , utc + tz fraction of this
		// find previous and next new moon days as ,jd
		// previous
		// next
		//TODO length of month
		// moon age now
		// find full moon
		for (
			var k = this.utcjdNow + a,
				l = g.find((a) => a < k),
				m = g.find((a) => a > k),
				n = 1 < h.length ? h[1] : h[0],
				o = j[0],
				p = l ? l : n,
				q = p + a,
				r = m ? m : o,
				s = r + a,
				t = s - q,
				u = k - q,
				v = [],
				w = d;
			w <= e;
			w++
		)
			v.push(MyMoon.calMoonPhases(b, w).full + a);
		var x = 0;
		for (var y of v) y > q && y < s && (x = y); // string of fm, pnm and nnm
		var z = MyMoon.jd2DateTime(x).string,
			A = MyMoon.jd2DateTime(q).string,
			B = MyMoon.jd2DateTime(s).string;
		return { l_m: t, man: u, pnmStr: A, nnmStr: B, fmStr: z };
	}
	moonAge() {
		return this.moon_age().man;
	}
	get previousNM() {
		return this.moon_age().pnmStr;
	}
	get nextNM() {
		return this.moon_age().nnmStr;
	}
	get FM() {
		return this.moon_age().fmStr;
	}
} // ------------------ Myanmar Calendar Calculation -------------------------------------------------//
/**
 * Basic MCC
 */ var bcc = {
	MO: 1954168.050623,
	SY: 1577917828 / 432e4,
	LM: 1577917828 / 53433336,
	WTE: { one: [1201, 1263, 1344], zero: [1202, 1264, 1345] },
	FME: [
		[1377, 1], //
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
	], // ၁၉နှစ်စက်ဝန်းအကြွင်းဇယား
	// မြန်မာနှစ်အား ၁၉ ဖြင့်စား အောက်ပါအကြွင်းများ သတ်မှတ်သည့်နှစ်ကာလအပိုင်းအလိုက်ရရှိပါက ဝါထပ်နှစ်ဖြစ်သည်
	MC: [
		//  ၁၂၁၆ ခုနှစ်အထိ အကြွင်း ( ၂၊ ၅၊ ၇၊ ၁ဝ၊ ၁၃၊ ၁၅၊ ၁၈ )
		[2, 5, 7, 10, 13, 15, 18], // ၁၂၁၇ ခုနှစ် မှ ၁၂၇၃ ခုနှစ်အထိ အကြွင်း  ( ၁၊ ၄၊ ၇၊ ၁ဝ၊ ၁၂၊ ၁၅၊ ၁၈ )
		[1, 4, 7, 10, 12, 15, 18], // ၁၂၇၄ ခုနှစ်မှ ၁၃၁၁ ခုနှစ်အထိ အကြွင်း ( ၁၊ ၄၊ ၇၊ ၉၊ ၁၂၊ ၁၅၊ ၁၈ )
		[1, 4, 7, 9, 12, 15, 18], // ၁၃၁၂ ခုနှစ်မှစ၍ အကြွင်း ( ၁၊ ၄၊ ၆၊ ၉၊ ၁၂၊ ၁၅၊ ၁၇ )
		[1, 4, 6, 9, 12, 15, 17],
	],
	ky(a) {
		if (!Number.isInteger(a) || 0 >= a) throw new Error("Invalid Myanmar Year");
		return a + 3739;
	},
	by(a) {
		if (!Number.isInteger(a) || 0 >= a) throw new Error("Invalid Myanmar Year");
		return a + 1182;
	},
	e3(a) {
		return 1312 <= a;
	},
	e2(a) {
		return 1312 > a && 1217 <= a;
	},
	e13(a) {
		return 1217 > a && 1100 <= a;
	},
	e12(a) {
		return 1100 > a && 798 <= a;
	},
	e11(a) {
		return 798 > a;
	},
	searchFme(b) {
		var c = this.FME.find((a) => a[0] === b),
			a = 0;
		return (a = void 0 === c ? 0 : c[1]), a;
	},
	wh19(a) {
		var b = a % 19,
			c = 0;
		return (
			bcc.WTE.zero.includes(a)
				? (c = 0)
				: bcc.WTE.one.includes(a)
					? (c = 1)
					: 1216 >= a
						? (c = bcc.MC[0].includes(b) ? 1 : 0)
						: 1217 <= a && 1273 >= a
							? (c = bcc.MC[1].includes(b) ? 1 : 0)
							: 1274 <= a && 1311 >= a
								? (c = bcc.MC[2].includes(b) ? 1 : 0)
								: 1312 <= a && (c = bcc.MC[3].includes(b) ? 1 : 0),
			c
		);
	},
	nmwo(a) {
		var b = 0,
			c = 0;
		return (
			bcc.e3(a)
				? ((b = 8), (c = -0.5))
				: bcc.e2(a)
					? ((b = 4), (c = -1))
					: bcc.e13(a)
						? ((b = -1), (c = -0.85))
						: ((b = -1), (c = -1.1)),
			{ nm: b, wo: c + bcc.searchFme(a) }
		);
	},
	ta(a) {
		return (12 - bcc.nmwo(a).nm) * (bcc.SY / 12 - bcc.LM);
	},
	tw(a) {
		return bcc.LM - bcc.nmwo(a).nm * (bcc.SY / 12 - bcc.LM);
	},
	ed(a) {
		if (!Number.isInteger(a) || 0 >= a) throw new Error("Invalid Myanmar Year");
		var b = bcc.ky(a),
			c = (bcc.SY * b) % bcc.LM;
		return c < bcc.ta(a) ? c + bcc.LM : c;
	},
	nyt(a) {
		return bcc.SY * a + bcc.MO;
	},
	whEra(a) {
		var b = bcc.ed(a) >= bcc.tw(a) ? 1 : 0,
			c = 0;
		return (
			(c = bcc.WTE.one.includes(a) ? 1 : bcc.WTE.zero.includes(a) ? 0 : b), c
		);
	},
	ser2ndws(a) {
		return Math.round(bcc.nyt(a) - bcc.ed(a) + 4.5 * bcc.LM + bcc.nmwo(a).wo);
	},
	checkMmYear(b) {
		for (
			var d = bcc.whEra(b), a = bcc.ser2ndws(b), e = 0, f = 0, g = 0, h = 1;
			4 > h &&
			((g = bcc.ser2ndws(b - h)), (e = bcc.whEra(b - h)), (f = h), 1 !== e);
			h++
		);
		var j = (a - g) % 354,
			k = 0 === d ? d : Math.floor(j / 31) + d,
			l = 1 === d ? a : g + 354 * f,
			m = 1 === d && 31 !== j && 30 !== j ? 1 : 0,
			n = g + 354 * f - 102;
		return { myt: k, tg1: n, fm: l, err: m };
	},
	mmyl(a) {
		var b = Math.floor;
		return 354 + 30 * (1 - b(1 / (a + 1))) + b(a / 2);
	},
	mml(a, b) {
		var c = Math.floor,
			d = 30 - (b % 2); /* စုံ = ၃၀ မ = ၂၉ */ /*
     ဝါကြီးထပ်နှစ်အတွက် နယုန်လတွင်တစ်ရက်ပေါင်း
     29 + 1 = 30 days
     */
		return 3 === b && (d += c(a / 2)), d;
	},
	mp(a, b, c) {
		var d = Math.floor,
			e = bcc.mml(a, b);
		return d((c + 1) / 16) + d(c / 16) + d(c / e);
	},
	mf(a) {
		return a - 15 * Math.floor(a / 16);
	},
	md(a, b, c, d) {
		var e = bcc.mml(d, c),
			f = b % 2,
			g = Math.floor(b / 2);
		return f * (15 + g * (e - 15)) + (1 - f) * (a + 15 * g);
	},
	j2m(d) {
		var g = Math.floor,
			h = Math.round(d),
			i = g((h - 0.5 - bcc.MO) / bcc.SY),
			j = bcc.checkMmYear(i),
			k = h - j.tg1 + 1,
			l = g(j.myt / 2),
			b = g(1 / (j.myt + 1)),
			c = 354 + 30 * (1 - b) + l,
			m = g((k - 1) / c); /* ရက်အရေအတွက် */ /* month type: late =1 or early = 0 */
		k -= m * c; /* adjust day count and threshold */
		var n = g((k + 423) / 512),
			a = g((k - l * n + 30 * (b * n) + 29.26) / 29.544),
			o = g((a + 12) / 16),
			e = g((a + 11) / 16),
			f =
				k -
				g(29.544 * a - 29.26) -
				l * o +
				30 * (b * e); /* adjust month numbers for late months */
		a += 3 * e - 4 * o + 12 * m;
		var p = j.myt;
		return { myt: p, my: i, mm: a, md: f };
	},
}; /**
 * **Get Thingyan Holidays**
 * @param jdn Julian Day Number
 * @param my Myanmar Calendar Year
 * @param mmt Myanmar Month Type
 * @param hs String array to collect holidays
 */
function thingyanHolidays(a, b, c, d) {
	var e = Math.floor,
		f = (1577917828 / 432e4) * (b + c) + 1954168.050623,
		g = 0; //solar year (365.2587565)
	//beginning of 0 ME
	//start of Thingyan
	//third era
	g = b >= 1312 ? f - 2.169918982 : f - 2.1675;
	var h = e(g),
		i = e(f);
	a === i + 1 && d.push("Burmese New Year's Day"),
		b + c >= 1100 &&
			(a === i
				? d.push("Thingyan Atat")
				: a > h && a < i
					? d.push("Thingyan Akyat")
					: a === h
						? d.push("Thingyan Akya")
						: a === h - 1
							? d.push("Thingyan Akyo")
							: 1369 <= b + c &&
									1379 > b + c &&
									(a === h - 2 || (a >= i + 2 && a <= h + 7))
								? d.push("Holiday")
								: 1384 <= b + c &&
										1385 >= b + c &&
										(a === h - 5 || a === h - 4 || a === h - 3 || a === h - 2)
									? d.push("Holiday")
									: 1386 <= b + c &&
										a >= i + 2 &&
										a <= h + 7 &&
										d.push("Holiday"));
} /**
 *  **Get public holidays of Myanmar on Myanmar Calendar's date**
 * @param my Myanmar Calendar Year
 * @param mm Myanmar Calendar Month
 * @param md Myanmar Calendar Day
 * @param mp Moon Phase
 * @param hs String array to collect holidays
 */
function mmHolidays(a, b, c, d, e) {
	2 === b && 1 === d
		? e.push("Buddha Day")
		: 4 === b && 1 === d
			? e.push("Beginning of Buddhist Lent")
			: 7 === b && 1 === d
				? e.push("End of Buddhist Lent")
				: 1379 <= a && 7 === b && (14 === c || 16 === c)
					? e.push("Holiday")
					: 8 === b && 1 === d
						? e.push("Tazaungdaing")
						: 1379 <= a && 8 === b && 14 === c
							? e.push("Holiday")
							: 1282 <= a && 8 === b && 25 === c
								? e.push("National Day")
								: 10 === b && 1 === c
									? e.push("Karen New Year's Day")
									: 12 == b && 1 == d && e.push("Tabaung Pwe");
} /**
 * **Get public holidays of Myanmar on Gregorian date**
 * @param year
 * @param month
 * @param day
 * @param hs String array to collect holidays
 */
function gregorianHolidays(a, b, c, d) {
	2018 <= a && 2021 >= a && 1 === b && 1 === c
		? d.push("New Year's Day")
		: 1948 <= a && 1 === b && 4 === c
			? d.push("Independence Day")
			: 1947 <= a && 2 === b && 12 === c
				? d.push("Union Day")
				: 1958 <= a && 3 === b && 2 === c
					? d.push("Peasants' Day")
					: 1945 <= a && 3 === b && 27 === c
						? d.push("Armed Forces Day")
						: 1923 <= a && 5 === b && 1 === c
							? d.push("Labour Day")
							: 1947 <= a && 7 === b && 19 === c
								? d.push("Martyrs' Day")
								: 1752 <= a && 12 === b && 25 === c
									? d.push("Christmas")
									: 2017 === a && 12 === b && 30 === c
										? d.push("Holiday")
										: 2017 <= a &&
											2021 >= a &&
											12 == b &&
											31 == c &&
											d.push("Holiday");
} /**
 * **Substitute Holiday**
 * @param jdn Julian Day Number
 * @param hs String array to collect holidays
 */
function substituteHoliday(a, b) {
	[
		// 2019
		2458768,
		2458772,
		2458785,
		2458800, // 2020
		2458855,
		2458918,
		2458950,
		2459051,
		2459062,
		2459152,
		2459156,
		2459167,
		2459181,
		2459184, // 2021
		2459300,
		2459303,
		2459323,
		2459324,
		2459335,
		2459548,
		2459573,
	].includes(a) && b.push("Holiday");
} //TODO add Eid Al Adha Day,  is a public holiday under Section 25 of the Negotiable Instruments Act of the Republic of the Union of Myanmar.
var eidDays = [
	//2020
	2459063,
];
function eid_day(a, b) {
	eidDays.includes(a) && b.push("Eid al-Adha");
} /**
 * **Get All Public HoliDays**
 * @param {HolidayParams}
 */
function holidays(a) {
	var {
		jdn: b,
		year: c,
		month: d,
		day: e,
		mp: f,
		mmt: g,
		my: h,
		mm: i,
		md: j,
		hs: k,
	} = a;
	gregorianHolidays(c, d, e, k),
		substituteHoliday(b, k),
		thingyanHolidays(b, h, g, k),
		mmHolidays(h, i, j, f, k);
} // -------------------------------- Astro Days ------------------------------------//
// Yatyarzar Pyathada
function yatyaza(a, b) {
	var c = Math.floor,
		d = a % 4,
		e = 0,
		f = c(d / 2) + 4,
		g = (1 - c(d / 2) + (d % 2)) * (1 + 2 * (d % 2));
	return (b === f || b === g) && (e = 1), ["", "Yatyaza"][e];
}
function pyathada(a, b) {
	var c = a % 4,
		d = 0;
	return (
		0 === c && 4 === b && (d = 2),
		c === [1, 3, 3, 0, 2, 1, 2][b] && (d = 1),
		["", "Pyathada", "Afternoon Pyathada"][d]
	);
}
function yp(a, b) {
	var c = yatyaza(a, b),
		d = pyathada(a, b),
		e = "";
	return (
		"" === d && "" === c
			? (e = "")
			: "" !== c && "" !== d
				? (e = [c, d])
				: "" === c && "" !== d
					? (e = d)
					: "" !== c && "" === d && (e = c),
		e
	);
} // Sabbath Nagahle Maharbote Natkhat
function sabbath(a, b) {
	var c = 0;
	return (
		(8 === a || 15 === a || 23 === a || a === b) && (c = 1),
		(7 === a || 14 === a || 22 === a || a === b - 1) && (c = 2),
		["", "Sabbath", "Sabbath Eve"][c]
	);
}
function nagahle(a) {
	var c = a;
	0 >= a && (c = 4); //first warso is considered warso
	var d = Math.floor((c % 12) / 3);
	return ["West", "North", "East", "South"][d];
}
function mahabote(a, b) {
	return ["Binga", "Ahtun", "Yaza", "Adipati", "Marana", "Thike", "Puti"][
		(a - b) % 7
	];
}
function natkhat(a) {
	return ["Ogre", "Elf", "Human"][a % 3];
} // -------------------------------------------------------------------------------------
/**
 * Calculate Thamanyo
 * @param mm myanmar month
 * @param wd weekday id
 */ function thamanyo(a, b) {
	var c = Math.floor,
		d = c(a / 13),
		e = (a % 13) + d; // to 1-12 with month type
	0 >= e && (e = 4); //first warso is considered warso (looks no need here)
	var f = e - 1 - c(e / 9),
		g = (2 * f - c(f / 8)) % 7,
		h = 1 >= (b + 7 - g) % 7 ? 1 : 0;
	return h;
} /**
 * Calculate Thamaphyu
 * @param md myanmar date [1-30]
 * @param wd weekday id
 */
function thamaphyu(a, b) {
	var c = a % 16,
		d = 0; // Calculate fortnight day [0-15]
	return (
		(c === [1, 2, 6, 6, 5, 6, 7][b] ||
			c === [0, 1, 0, 0, 0, 3, 3][b] ||
			(4 === c && 5 === b)) &&
			(d = 1),
		d
	);
}
function amyeittasote(a, b) {
	// Calculate fortnight day [0-15]
	return a % 16 === [5, 8, 3, 7, 2, 4, 1][b] ? 1 : 0;
}
function warameittugyi(a, b) {
	var c = a - 15 * Math.floor(a / 16); //get fortnight day [0-15]
	return c === [7, 1, 4, 8, 9, 6, 3][b] ? 1 : 0;
}
function warameittunge(a, b) {
	var c = a - 15 * Math.floor(a / 16); //get fortnight day [0-15]
	return 12 - c === (b + 6) % 7 ? 1 : 0;
}
function yatpote(a, b) {
	var c = a - 15 * Math.floor(a / 16); //get fortnight day [0-15]
	return c === [8, 1, 4, 6, 9, 8, 7][b] ? 1 : 0;
}
function nagapor(a, b) {
	return a === [26, 21, 2, 10, 18, 2, 21][b] ||
		a === [17, 19, 1, 0, 9, 0, 0][b] ||
		(2 === a && 1 === b) ||
		((12 === a || 4 === a || 18 === a) && 2 === b)
		? 1
		: 0;
}
function yatyotema(a, b) {
	var c = a % 13 || 13; // Normalize month to 1-12
	0 >= c && (c = 4); // Consider first warso as warso
	var d = c % 2 ? c : (c + 9) % 12,
		e = b % 16 === ((d + 4) % 12) + 1 ? 1 : 0; // Get fortnight day [0-15]
	return e;
}
function mahayatkyan(a, b) {
	var c = Math.floor,
		d = a;
	0 >= d && (d = 4); // Adjust month if less than or equal to 0
	var e = 0,
		f = ((c((d % 12) / 2) + 4) % 6) + 1; // Calculate fortnight day [0-15]
	return b % 16 === f && (e = 1), e;
}
function shanyat(a, b) {
	var c = Math.floor(a / 13),
		d = (a % 13) + c; // Adjust month to 1-12 range
	0 >= d && (d = 4); // Consider first warso as warso
	var e = b % 16 === [8, 8, 2, 2, 9, 3, 3, 5, 1, 4, 7, 4][d - 1] ? 1 : 0; // Get day within a fortnight [0-15]
	return e;
}
export function astro(a, b, c, d) {
	thamanyo(a, c) && d.push("Thamanyo"),
		amyeittasote(b, c) && d.push("Amyeittasote"),
		warameittugyi(b, c) && d.push("Warameittugyi"),
		warameittunge(b, c) && d.push("Warameittunge"),
		yatpote(b, c) && d.push("Yatpote"),
		thamaphyu(b, c) && d.push("Thamaphyu"),
		nagapor(b, c) && d.push("Nagapor"),
		yatyotema(a, b) && d.push("Yatyotema"),
		mahayatkyan(a, b) && d.push("Mahayatkyan"),
		shanyat(a, b) && d.push("Shanyat");
} // --------------------------
function astroDays(a) {
	var { my: b, mm: c, mml: d, md: e, wd: f } = a,
		g = yp(c, f),
		h = sabbath(e, d),
		i = nagahle(c),
		j = mahabote(b, f),
		k = natkhat(b);
	return {
		asd: (a) => astro(c, e, f, a),
		ypy: g,
		sbd: h,
		ngl: i,
		mhb: j,
		nkt: k,
	};
} // ---------------------------------- Utility Helpers-----------------------------------------
var utils = {
	SG: 2361222,
	UNIX: 2440587.5,
	secularDiff(a) {
		var b = Math.floor;
		return b(a / 100) - b(a / 400) - 2;
	},
	isLeapYear(a) {
		return (0 == a % 4 && 0 != a % 100) || 0 == a % 400;
	},
	monthsDaysArray(a) {
		return utils.isLeapYear(a)
			? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
			: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	},
	uniqNumber(a) {
		return Array.from(new Set(a));
	},
	uniqString(a) {
		return Array.from(new Set(a));
	},
	Tnum(c, a) {
		var d,
			e = null !== a && void 0 !== a ? a : "English",
			f = [
				"\u1040",
				"\u1041",
				"\u1042",
				"\u1043",
				"\u1044",
				"\u1045",
				"\u1046",
				"\u1047",
				"\u1048",
				"\u1049",
			];
		if ("English" === e) d = c;
		else {
			var b = c.toString().split(""),
				g = [];
			b.map((a) => {
				var b = f[Number.parseInt(a)];
				g.push(b);
			}),
				(d = g.join(""));
		}
		return d;
	},
	Tstr(a, b, c) {
		var d = null !== c && void 0 !== c ? c : "English",
			e = "";
		if ("English" === d) e = a;
		else if (Array.isArray(a)) {
			var f = [];
			a.map((a) => {
				var c = b.filter((b) => b[0] === a);
				f.push(c[0][1]);
			}),
				(e = f);
		} else {
			var g = b.find((b) => b[0] === a);
			e = g ? g[1] : "";
		}
		return e;
	},
	des2hms(b) {
		var e = Math.floor,
			f = e(b),
			a = 24 * (b - f),
			c = e(a),
			g = 60 * (a - c),
			d = e(g),
			h = e(60 * (g - d));
		return { hour: c, minute: d, second: h };
	},
	hms2des(a, b, c) {
		return a / 24 + b / 1440 + c / 86400;
	},
}; // ----------------------------------------------------------------------------------------------------------
/**
 * Julian Day Number to Myanmar Calendar Info
 * @param jdn julian day number
 * @returns object of Myanmar Calendar Info.
 */ function jtm(b) {
	var c = bcc.j2m(b),
		a = c.myt,
		d = c.my,
		e = c.mm,
		f = c.md,
		g = bcc.mp(a, e, f),
		h = bcc.mf(f),
		i = bcc.by(d),
		j = Math.floor(e / 13),
		k = MyMonthName[e],
		l = MoonPhase[g],
		m = bcc.mml(a, e); //
	//
	return {
		myt: a,
		ssy: i,
		my: d,
		mm_str: k,
		md: f,
		mp_str: l,
		mf: h,
		mmt: j,
		mp: g,
		mm: e,
		wd: (b + 2) % 7,
		mml: m,
	};
} // -------------------------------------------------------------------------- //
export class MyCal extends MyMoon {
	constructor() {
		super(...arguments),
			_defineProperty(this, "_lang", "English"),
			_defineProperty(this, "_yearCal", this.year),
			_defineProperty(this, "_monthCal", 0),
			_defineProperty(this, "_dateCal", 0);
	}
	_cal() {
		//_ssy
		//_mmy
		// ========================== //
		//     Start of Months loop     //
		// ========================== //
		for (
			var b = utils.monthsDaysArray(this._yearCal),
				c = {
					year: this._yearCal,
					/* cspell:disable */ sasana_years: [],
					myanmar_years: [],
					month_object: [],
				},
				d = "",
				e = [],
				f = [],
				g = "",
				h = [],
				k = [],
				l = 0;
			12 > l;
			l++
		) {
			//_mmm
			// ========================== //
			//     Start of Days loop     //
			// ========================== //
			for (
				var m = b[l],
					n = {
						year: this._yearCal,
						id: l + 1,
						month_long: MONTHS[l],
						month_short: MO[l],
						sasana_years: [],
						myanmar_years: [],
						myanmar_months: [],
						date_object: [],
					},
					o = [],
					p = 0;
				p < m;
				p++
			) {
				var q = l + 1,
					r = p + 1,
					s = MyCal.dateTime2Julian(
						this._yearCal,
						q,
						r,
						12,
						0,
						0,
						this._ct,
					).jdn,
					t = jtm(s),
					u = t.wd - 1,
					v = -1 === u ? 6 : u,
					w = astroDays({ my: t.my, mm: t.mm, mml: t.mml, md: t.md, wd: t.wd }); // wd id
				o.push(utils.Tstr(t.mm_str, langs, this._lang)),
					(d = utils.Tnum(t.ssy, this._lang)),
					"string" == typeof d ? e.push(d) : "number" == typeof d && f.push(d),
					(g = utils.Tnum(t.my, this._lang)),
					"string" == typeof g ? h.push(g) : "number" == typeof g && k.push(g);
				var x = {
						year: this._yearCal,
						month: MONTHS[l],
						date: p + 1,
						weekday_long: WEEK_DAYS[v],
						weekday_short: WD[v],
						wd_id: v,
						month_id: l + 1,
						jdn: s,
						mmcal: {
							sasana_year: utils.Tnum(t.ssy, this._lang),
							myanmar_year: utils.Tnum(t.my, this._lang),
							myanmar_month: utils.Tstr(t.mm_str, langs, this._lang),
							moon_phase: utils.Tstr(t.mp_str, langs, this._lang),
							fortnight_date: utils.Tnum(t.mf, this._lang),
							myanmar_date: utils.Tnum(t.md, this._lang),
							yatyaza_pyathada: utils.Tstr(w.ypy, langs, this._lang),
							mahabote: utils.Tstr(w.mhb, langs, this._lang),
							nagahle: utils.Tstr(w.ngl, langs, this._lang),
							nakhat: utils.Tstr(w.nkt, langs, this._lang),
							sabbath: utils.Tstr(w.sbd, langs, this._lang),
							astro_days: [],
							public_holiday: [],
						},
					},
					y = []; // TODO - translation of astro-days and holidays
				// temp storage for astro days
				w.asd(y); // temp storage for holidays
				var z = []; // push holidays to temp storage
				holidays({
					jdn: s,
					year: this._yearCal,
					month: q,
					day: r,
					mp: t.mp,
					mmt: t.mmt,
					my: t.my,
					mm: t.mm,
					md: t.md,
					hs: z,
				}),
					(x.mmcal.astro_days = utils.Tstr(y, langs, this._lang)),
					(x.mmcal.public_holiday = utils.Tstr(z, langs, this._lang)),
					n.date_object.push(x);
			} // remove all duplicate values from string or number arrays of month object push by days loop
			var A = utils.uniqString(o);
			(n.myanmar_months = [...A]),
				(n.sasana_years =
					"string" == typeof d ? utils.uniqString(e) : utils.uniqNumber(f)),
				(n.myanmar_years =
					"string" == typeof g ? utils.uniqString(h) : utils.uniqNumber(k)),
				c.month_object.push(n);
		} // remove all duplicate values from string or number arrays of year object push by  days and months loops
		return (
			(c.sasana_years =
				"string" == typeof d ? utils.uniqString(e) : utils.uniqNumber(f)),
			(c.myanmar_years =
				"string" == typeof g ? utils.uniqString(h) : utils.uniqNumber(k)),
			c
		);
	}
	res() {
		return 0 !== this._monthCal && 0 === this._dateCal
			? this._cal().month_object[this._monthCal - 1]
			: 0 !== this._monthCal && 0 !== this._dateCal
				? this._cal().month_object[this._monthCal - 1].date_object[
						this._dateCal - 1
					]
				: this._cal();
	} // for calendar month view
	calMontView(a, b, c) {
		(this._yearCal = a), (this._monthCal = b), (this._lang = c);
		var d = this._cal(),
			e = d.sasana_years,
			f = d.myanmar_years,
			g = d.month_object[b - 1];
		return { ssys: e, mys: f, mo: g };
	}
	set yearForCalendar(a) {
		this._yearCal = a;
	}
	get yearForCalendar() {
		return this._yearCal;
	}
	set monthForCalendar(a) {
		this._monthCal = a;
	}
	get monthForCalendar() {
		return this._monthCal;
	}
	set dateForCalendar(a) {
		this._dateCal = a;
	}
	get dateForCalendar() {
		return this._dateCal;
	}
	set lang(a) {
		this._lang = a;
	}
	get lang() {
		return this._lang;
	}
}
