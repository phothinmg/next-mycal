import { utils } from "./helper/utils";
import type { TimeZones } from "./timezone";
import { TimeZ } from "./timezone";
import { get_offset } from "./timezones/mod";
import type { CalendarTypes } from "./gre";
import { dateTimeToJulian } from "./gre";
import type { GTJOptions } from "./gre";
//
type J2D = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};
type J2DTOptions = {
  jd: number;
  ct?: CalendarTypes;
  tz?: TimeZones;
};
type J2DT = {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  second: number;
  ToString: (formatOptions: Intl.DateTimeFormatOptions) => string;
};
function j2d(jd: number): J2D {
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
function ctc({
  year,
  month,
  day,
  hour,
  minute,
  second,
  calendarType,
  timeZone,
}: GTJOptions): J2D {
  const jd = dateTimeToJulian({
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    calendarType: calendarType,
    timeZone: timeZone,
  }).jd;
  const d: number = utils.secularDiff(year);
  const jdd: number = jd - d;
  return j2d(jdd);
}
function dateString(
  year: number,
  month: number,
  day: number,
  hour?: number,
  minute?: number,
  second?: number
): string {
  const hr = hour ?? 12;
  const min = minute ?? 0;
  const sec = second ?? 0;
  const m = month.toString().length === 1 ? `0${month}` : `${month}`;
  const d = day.toString().length === 1 ? `0${day}` : `${day}`;
  const h = hr.toString().length === 1 ? `0${hr}` : `${hr}`;
  const mi = min.toString().length === 1 ? `0${min}` : `${min}`;
  const s = sec.toString().length === 1 ? `0${sec}` : `${sec}`;
  return `${year}-${m}-${d} ${h}:${mi}:${s}`;
}
//
function j2dt({ jd, ct, tz }: J2DTOptions): J2DT {
  // setting default values
  const clt: CalendarTypes = ct ?? "Gregorian";
  const tzz: TimeZones = tz ?? "UTC+00:00";
  const tzone: number = TimeZ[tzz];
  const dftz: number = tzone / 24;
  // pre jd with decimal fraction of given tz offset
  const jdd = jd + dftz;
  const g: J2D = j2d(jdd);
  const jnb: J2D = ctc({
    year: g.year,
    month: g.month,
    day: g.day,
    minute: g.minute,
    hour: g.hour,
    second: g.second,
    timeZone: tzz,
    calendarType: clt,
  });
  const r: J2D =
    clt === "Julian" || (clt === "British" && jd < utils.SG) ? jnb : g;
  /**
   * Gregorian Year in type number
   */
  const year: number = r.year;
  /**
   * Gregorian Month in type number
   */
  const month: number = r.month;
  /**
   * Gregorian Day in type number
   */
  const date: number = r.day;
  /**
   * Hour in type number
   */
  const hour: number = r.hour ?? 12;
  /**
   * Minute in type number
   */
  const minute: number = r.minute ?? 0;
  /**
   * Second in type number
   */
  const second: number = r.second ?? 0;
  const ds = dateString(year, month, date, hour, minute, second);
  const dt = new Date(ds);
  const ToString = (formatOptions: Intl.DateTimeFormatOptions): string => {
    return dt.toLocaleDateString("en-US", formatOptions);
  };
  return {
    year,
    month,
    date,
    hour,
    minute,
    second,
    ToString,
  };
}

export function julianToDateTime({ jd, ct, tz }: J2DTOptions): {
  utcDateTime: string;
  localDateTime: string;
  customDateTime: string;
} {
  const tzz: TimeZones = tz ?? "UTC+00:00";
  const localTzOffset = -(new Date().getTimezoneOffset() / 1440);
  const customTzOffset = TimeZ[tzz] / 24;
  // ----------------------------UTC---------------------------//
  const g = j2d(jd);
  const g2 = ctc({
    year: g.year,
    month: g.month,
    day: g.day,
    hour: g.hour,
    minute: g.minute,
    second: g.second,
  });
  const g3 = ct === "Julian" || (ct === "British" && jd < utils.SG) ? g2 : g;
  const utcDateTime = new Date(
    g3.year,
    g3.month - 1,
    g3.day,
    g3.hour,
    g3.minute,
    g3.second
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h12",
    weekday: "short",
  });
  // --------------------------------------------------
  const l = j2d(jd + localTzOffset);
  const l2 = ctc({
    year: l.year,
    month: l.month,
    day: l.day,
    hour: l.hour,
    minute: l.minute,
    second: l.second,
  });
  const l3 = ct === "Julian" || (ct === "British" && jd < 2361222) ? l2 : l;
  const localDateTime = new Date(
    l3.year,
    l3.month - 1,
    l3.day,
    l3.hour,
    l3.minute,
    l3.second
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h12",
    weekday: "short",
  });
  const c = j2d(jd + customTzOffset);
  const c2 = ctc({
    year: c.year,
    month: c.month,
    day: c.day,
    hour: c.hour,
    minute: c.minute,
    second: c.second,
  });
  const c3 = ct === "Julian" || (ct === "British" && jd < 2361222) ? c2 : c;
  const customDateTime = new Date(
    c3.year,
    c3.month - 1,
    c3.day,
    c3.hour,
    c3.minute,
    c3.second
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h12",
    weekday: "short",
  });
  return {
    utcDateTime,
    localDateTime,
    customDateTime,
  };
}
