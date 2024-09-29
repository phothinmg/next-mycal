// functions and for web app
// types def
export type CalendarTypes = "British" | "Gregorian" | "Julian";

// functions
export function secularDiff(year: number): number {
  return Math.floor(year / 100) - Math.floor(year / 400) - 2;
}

export function j2d(jd: number): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
} {
  // JDN to Year Month Date
  const jdn = Math.round(jd);

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
  const j = Math.floor(jd);
  const fjdn = jd - j;
  const xx1 =
    fjdn >= 0.5 ? (fjdn * 86400 - 43200) / 3600 : (fjdn * 86400 + 43200) / 3600;
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
export function jdnow(): number {
  const ut = new Date().getTime() / 1000;
  const jd = 2440587.5 + ut / 86400.0;
  return jd;
}
export function julianToDateTime(jd: number, ct: CalendarTypes): string {
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
  // ----------------------------UTC---------------------------//
  const g = j2d(jd);
  const g2 = j2d(jd - secularDiff(g.year));
  const g3 = ct === "Julian" || (ct === "British" && jd < 2361222) ? g2 : g;
  const mo = ma[g3.month - 1];
  const h = g3.hour.toString().length === 1 ? `0${g3.hour}` : `${g3.hour}`;
  const mi =
    g3.minute.toString().length === 1 ? `0${g3.minute}` : `${g3.minute}`;
  const s =
    g3.second.toString().length === 1 ? `0${g3.second}` : `${g3.second}`;
  return `${mo} ${g3.day} , ${g3.year} , ${h}:${mi}:${s}`;
}
export function dt2j(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  ct: CalendarTypes
): { jd: number; jdn: number } {
  // setting default values
  const h: number = hour ?? 12;
  const m: number = minute ?? 0;
  const s: number = second ?? 0;
  const ctt: CalendarTypes = ct ?? "Gregorian";
  const d: number = secularDiff(year);
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
    ctt === "Julian" || (ctt === "British" && _jd < 2361222) ? _jd + d : _jd;
  // make sure jdn with tz and calendar type
  const jdn: number = Math.round(jd);
  return {
    jd,
    jdn,
  };
}
