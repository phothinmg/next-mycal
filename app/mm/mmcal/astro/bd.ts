/* cspell:disable */
export function sabbath(md: number, mml: number): string {
	const a: string[] = ["", "Sabbath", "Sabbath Eve"];
	let s = 0;
	if (md === 8 || md === 15 || md === 23 || md === mml) s = 1;
	if (md === 7 || md === 14 || md === 22 || md === mml - 1) s = 2;
	return a[s];
}
export function nagahle(mm: number): string {
	const a: string[] = ["West", "North", "East", "South"];
	let m1: number = mm;
	if (mm <= 0) m1 = 4; //first warso is considered warso
	const b: number = Math.floor((m1 % 12) / 3);
	return a[b];
}
export function mahabote(my: number, wd: number): string {
	const a: string[] = [
		"Binga",
		"Ahtun",
		"Yaza",
		"Adipati",
		"Marana",
		"Thike",
		"Puti",
	];
	const b: number = (my - wd) % 7;
	return a[b];
}

export function natkhat(my: number): string {
	const a: string[] = ["Ogre", "Elf", "Human"];
	const b: number = my % 3;
	return a[b];
}
