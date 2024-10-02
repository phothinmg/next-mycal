// -------------------- types ----------------------------
export type CalendarTypes = "British" | "Gregorian" | "Julian";

// -------------------------------------- Helper ------------------------------------
export function secularDiff(year: number): number {
  return Math.floor(year / 100) - Math.floor(year / 400) - 2;
}
// -------------------- Julian to Date Time ---------------------------------------------
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
// --------------------------------------------- Date Time to Julian--------------------------------------------
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
// ------------------------------------------------ Moon Phases ------------------------------------------------------------ //
function julian2dt(jd: number, ct: CalendarTypes) {
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
  const dstr = g3.day.toString().length === 1 ? `0${g3.day}` : `${g3.day}`;
  const h = g3.hour.toString().length === 1 ? `0${g3.hour}` : `${g3.hour}`;
  const mi =
    g3.minute.toString().length === 1 ? `0${g3.minute}` : `${g3.minute}`;
  const s =
    g3.second.toString().length === 1 ? `0${g3.second}` : `${g3.second}`;
  const dateStr = `${g3.year} ${mo} ${dstr} ${h}:${mi}:${s}`;
  return {
    yr: g3.year,
    mt: g3.month,
    da: g3.day,
    min: g3.minute,
    sec: g3.second,
    string: dateStr,
  };
}
function mod360(f: number) {
  let t = f % 360;
  if (t < 0) t += 360;
  return t;
}
//

function getCycle(year: number, month: number) {
  const yf = (month * 30 + 15) / 365; //Estimate fraction of year
  const k = 12.3685 * (year + yf - 2000);
  return Math.floor(k);
}

type MoonPhases = 0 | 0.25 | 0.5 | 0.75;

function phaseDate(cycle: number, phase: MoonPhases) {
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
    mod360(
      2.5534 + 29.1053567 * k - 0.0000014 * T * T - 0.00000011 * T * T * T
    ) * toRad; //49.4
  const Mp =
    mod360(
      201.5643 +
        385.81693528 * k +
        0.0107582 * T * T +
        0.00001238 * T * T * T -
        0.000000058 * T * T * T * T
    ) * toRad; //49.5
  const F =
    mod360(
      160.7108 +
        390.67050284 * k -
        0.0016118 * T * T -
        0.00000227 * T * T * T +
        0.000000011 * T * T * T * T
    ) * toRad; //49.6
  const Om =
    mod360(
      124.7746 - 1.56375588 * k + 0.0020672 * T * T + 0.00000215 * T * T * T
    ) * toRad; //49.7

  //P351-352
  const A1 = mod360(299.77 + 0.107408 * k - 0.009173 * T * T) * toRad;
  const A2 = mod360(251.88 + 0.016321 * k) * toRad;
  const A3 = mod360(251.83 + 26.651886 * k) * toRad;
  const A4 = mod360(349.42 + 36.412478 * k) * toRad;
  const A5 = mod360(84.66 + 18.206239 * k) * toRad;
  const A6 = mod360(141.74 + 53.303771 * k) * toRad;
  const A7 = mod360(207.14 + 2.453732 * k) * toRad;
  const A8 = mod360(154.84 + 7.30686 * k) * toRad;
  const A9 = mod360(34.52 + 27.261239 * k) * toRad;
  const A10 = mod360(207.19 + 0.121824 * k) * toRad;
  const A11 = mod360(291.34 + 1.844379 * k) * toRad;
  const A12 = mod360(161.72 + 24.198154 * k) * toRad;
  const A13 = mod360(239.56 + 25.513099 * k) * toRad;
  const A14 = mod360(331.55 + 3.592518 * k) * toRad;
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
    if (phase == 0.25) {
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

function calMoonPhases(year: number, month: number) {
  const cy: number = getCycle(year, month);
  const _n: number = phaseDate(cy, 0);
  const _fst: number = phaseDate(cy, 0.25);
  const _ful: number = phaseDate(cy, 0.5);
  const _lst: number = phaseDate(cy, 0.75);
  return {
    new: _n,
    fq: _fst,
    full: _ful,
    lq: _lst,
  };
}

export function fullMoonYear(year: number): string[] {
  const ct: CalendarTypes = "Gregorian";
  const phases = new Array(12).fill(0).map((_, i) => calMoonPhases(year, i));
  return phases.map((p) => julian2dt(p.full, ct).string);
}
export function newMoonYear(year: number) {
  const ct: CalendarTypes = "Gregorian";
  const phases = new Array(12).fill(0).map((_, i) => calMoonPhases(year, i));
  return phases.map((p) => julian2dt(p.new, ct).string);
}

// -------------------------------------- Moon Age -------------------------------------//
function moon_age(jd: number): number {
  // average lenght of lunar month
  const lm: number = 1577917828.0 / 53433336.0;
  // 2000 Jan 6 18:14 lunation number 0 jd
  const ln0: number = 2451550.259733796;
  // calculate the days since ln0
  const lnDays = jd - ln0;
  // calculate cycle lnDays / lm
  const cycle = lnDays / lm;
  // drop the whole number of cycle , the decimal represents the fraction of a cycle that the moon is currently in
  // get decimalm part of cycle
  const des: number = cycle - Math.floor(cycle);
  // get the days from previous new moon des * lm
  const d: number = des * lm;
  return d;
}
function mmJdnow() {
  return jdnow() + 6.5 / 24;
}
// get new moons data
export function getNMs() {
  const ct: CalendarTypes = "Gregorian";
  const mmNow = mmJdnow();
  const jdNow = jdnow();
  const dt = new Date();
  const y = dt.getUTCFullYear();
  const rm = dt.getUTCMonth();
  const pm = rm - 1;
  const nm = rm + 1;
  // recent month NMs
  let rnms: number[] = [];
  rnms.push(calMoonPhases(y, rm).new);
  // prev month NMs
  let pnms: number[] = [];
  pnms.push(calMoonPhases(y, pm).new);
  // next month NMs
  let nnms: number[] = [];
  nnms.push(calMoonPhases(y, nm).new);
  // ------------------------------------------
  //let p_n_m: number = 0;
  //let n_n_m: number = 0;
  const nm1: number | undefined = rnms.find((i) => i < jdNow);
  const nm2: number | undefined = rnms.find((i) => i > jdNow);
  const nm3: number = pnms.length > 1 ? pnms[1] : pnms[0];
  const nm4: number = nnms[0];
  const p_n_m: number = nm1 ? nm1 : nm3;
  const n_n_m: number = nm2 ? nm2 : nm4;
  const l_m: number = n_n_m - p_n_m;
  const man = moon_age(mmNow);
  const rest = l_m - man;
  const _mp = Math.floor((rest * 100) / l_m);
  const pnmStr = julian2dt(p_n_m, ct).string;
  const nnmStr = julian2dt(n_n_m, ct).string;
  return {
    l_m,
    man,
    _mp,
    p_n_m,
    n_n_m,
    pnmStr,
    nnmStr,
  };
}
export function moonAge() {
  const jdNow = jdnow();
  return moon_age(jdNow);
}
