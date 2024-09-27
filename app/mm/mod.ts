/* cspell:disable */
import type { Languages } from "./helper/utils";
import { utils } from "./helper/utils";
/* cspell:disable */
import { astroDays } from "./mmcal/astro/all";
import type { Astro } from "./mmcal/astro/all";
import { bcc } from "./mmcal/bcc";
import { holidays } from "./mmcal/holidays/all";
import { langs } from "./mmcal/langs";
/////////////////////////////////////////////////////////////
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
/**
 * Output when Julian to Myanmar Calendar
 */
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
type ResponseOptions = {
	year?: number;
	month?: number;
	date?: number;
};
/**
 * Gregorian to Julian
 * @param y year
 * @param m month
 * @param d date
 * @returns julian day number
 */
function g2j(y: number, m: number, d: number): number {
	const a = Math.floor((m - 3) / 12);
	const x4 = y + a;
	const x3 = Math.floor(x4 / 100);
	const x2 = x4 % 100;
	const x1 = m - 12 * a - 3;
	return (
		Math.floor((146097 * x3) / 4) +
		Math.floor((36525 * x2) / 100) +
		Math.floor((153 * x1 + 2) / 5) +
		d +
		1721119
	);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/* cSpell:enable */
/**
 * Julian Day Number to Myanmar Calendar Info
 * @param jdn julian day number
 * @returns object of Myanmar Calendar Info.
 */
export function jtm(jdn: number): JTM {
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
///////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////
/* cspell:disable */
/**
 * Myanmar Calendar Info.
 */
export class MyCalendar {
	private _lang: Languages = "English";
	private _year: number = new Date().getFullYear();
	private _month = 0;
	private _date = 0;
	private _cal(): YearObject {
		const ma: number[] = utils.monthsDaysArray(this._year);
		const yrObj: YearObject = {
			year: this._year,
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
				year: this._year,
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
				const a: number = g2j(this._year, mo, da);
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
					year: this._year,
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
					year: this._year,
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
	/**
	 * Set year for this
	 * @default new Date().getFullYear()
	 */
	public set year(year: number) {
		this._year = year;
	}
	/**
	 * Get year of this
	 */
	public get year(): number {
		return this._year;
	}
	public set month(month: number) {
		this._month = month;
	}
	public get month(): number {
		return this._month;
	}
	public set date(date: number) {
		this._date = date;
	}
	public get date(): number {
		return this._date;
	}
	public set lang(lang: Languages) {
		this._lang = lang;
	}
	public get lang() {
		return this._lang;
	}
	public res() {
		if (this._month !== 0 && this._date === 0) {
			return this._cal().month_object[this._month - 1];
		}
		if (this._month !== 0 && this._date !== 0) {
			return this._cal().month_object[this._month - 1].date_object[
				this._date - 1
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
		this._year = year;
		this._month = month;
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
	public static jdn2mm(jdn: number): JTM {
		return jtm(jdn);
	}
}
