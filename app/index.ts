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
