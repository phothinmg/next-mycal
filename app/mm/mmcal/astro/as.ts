/* cspell:disable */
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
