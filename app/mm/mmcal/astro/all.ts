/* cspell:disable */
import { astro } from "./as";
import { nagahle, sabbath } from "./bd";
import { mahabote, natkhat } from "./bd";
import { yp } from "./yp";

type AstroParams = {
	my: number;
	mm: number;
	mml: number;
	md: number;
	wd: number;
};

export type Astro = {
	asd: (hs: string[]) => void;
	ypy: string | string[];
	sbd: string;
	ngl: string;
	mhb: string;
	nkt: string;
};

export function astroDays({ my, mm, mml, md, wd }: AstroParams) {
	const asd = (hs: string[]): void => astro(mm, md, wd, hs);
	const ypy: string | string[] = yp(mm, wd);
	const sbd: string = sabbath(md, mml);
	const ngl: string = nagahle(mm);
	const mhb: string = mahabote(my, wd);
	const nkt: string = natkhat(my);
	return {
		asd,
		ypy,
		sbd,
		ngl,
		mhb,
		nkt,
	};
}
