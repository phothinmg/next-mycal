export type CalendarTypes = "British" | "Gregorian" | "Julian";
type MoonPhases = 0 | 0.25 | 0.5 | 0.75;
//
class MyJulian {
	protected _ct: CalendarTypes;
	protected _tz: number;
	protected _jd: number;
	protected static _sg = 2361222;
	constructor(jd?: number, tz?: number, ct?: CalendarTypes) {
		this._ct = ct ?? "Gregorian";
		this._tz = tz ?? 0;
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

	static unix2jd(unix: number): number {
		return 2440587.5 + unix / 86400.0;
	}
	static jd2unix(jd: number) {
		return (jd - 2440587.5) * 86400.0 + 0.5;
	}
	static jdutc(): number {
		const dt: Date = new Date();
		const unix: number = dt.getTime() / 1000;
		return MyJulian.unix2jd(unix);
	}
	static jdmm(): number {
		return MyJulian.jdutc() + 6.5 / 24;
	}
	jdnow() {
		return MyJulian.jdutc() + this._tz / 24;
	}
	public static jd2dt(
		jd: number,
		tz?: number,
	): {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	} {
		const tzz = tz ?? 0;
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
	public static jd2DateTime(
		jd: number,
		tz?: number,
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
		const tzz = tz ?? 0;
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
	public set tz(tz: number) {
		this._tz = tz;
	}
	public get tz(): number {
		return this._tz;
	}
	public set ct(ct: CalendarTypes) {
		this._ct = ct;
	}
	public get ct() {
		return this._ct;
	}
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

class MyMoon extends MyJulian {
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
		const tz = 0;
		const ct: CalendarTypes = "Gregorian";
		const phases = new Array(12)
			.fill(0)
			.map((_, i) => MyMoon.calMoonPhases(year, i));
		return phases.map((p) => MyMoon.jd2DateTime(p.full, tz, ct).string);
	}
	protected moon_age() {
		// tz offset of this to fraction of day
		const df = this._tz / 24;
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

export default MyMoon;
