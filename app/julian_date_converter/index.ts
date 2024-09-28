// timezone
type _TimeZ = {
  [key in TimeZones]: number;
};
//
const TimeZ: _TimeZ = {
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

type TimeZones =
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

const timeZones: string[] = [
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
type J2D = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};
export type CalendarTypes = "British" | "Gregorian" | "Julian";
/**
 * Gregorian to Julian Options
 */
type GTJOptions = {
  /**
   * Year
   */
  year: number;
  /**
   * Month
   */
  month: number;
  /**
   * Day
   */
  day: number;
  /**
   * Hour
   */
  hour?: number;
  /**
   * Minute
   */
  minute?: number;
  /**
   * Second
   */
  second?: number;
  /**
   * Type of calendars
   */
  calendarType?: CalendarTypes;
  /**
   * Timezones
   */
  timeZone?: TimeZones;
};
function secularDiff(year: number): number {
  return Math.floor(year / 100) - Math.floor(year / 400) - 2;
}
export function dateTimeToJulian({
  year,
  month,
  day,
  hour,
  minute,
  second,
  timeZone,
  calendarType,
}: GTJOptions): { jd: number; jdn: number } {
  // setting default values
  const h: number = hour ?? 12;
  const m: number = minute ?? 0;
  const s: number = second ?? 0;
  const ctt: CalendarTypes = calendarType ?? "Gregorian";
  const tzz: TimeZones = timeZone ?? "UTC+00:00";
  const tz: number = TimeZ[tzz];
  // secular difference for calendar types
  const d: number = secularDiff(year);
  // To decimal fraction of the day
  // h , m , s
  const df: number = (h - 12) / 24 + m / 1440 + s / 86400;
  // given tz offset
  const dftz: number = tz / 24;
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
  const _jd: number = _jdn + df + dftz;
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
//
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
  const d: number = secularDiff(year);
  const jdd: number = jd - d;
  return j2d(jdd);
}
export function julianToDateTime(jd: number, ct: CalendarTypes): string {
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
  const g3 = ct === "Julian" || (ct === "British" && jd < 2361222) ? g2 : g;
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
    hourCycle: "h24",
    weekday: "short",
    timeZone: "GMT",
  });
  return utcDateTime;
}
