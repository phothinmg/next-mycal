/**
 *  **Get public holidays of Myanmar on Myanmar Calendar's date**
 * @param my Myanmar Calendar Year
 * @param mm Myanmar Calendar Month
 * @param md Myanmar Calendar Day
 * @param mp Moon Phase
 * @param hs String array to collect holidays
 */
export function mmHolidays(
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
