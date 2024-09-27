/* cspell:disable */
/**
 * Warhtat Exceptions
 */
type WarhtatExceptions = {
	zero: number[];
	one: number[];
};
/**
 * Types for output when checking Myanmar Year
 */
type CheckMmYear = {
	/**
	 * Burmese Year
	 */
	myt: number;
	/**
	 * TG1 JDN
	 */
	tg1: number;
	/**
	 * JDN for 2dnd warso fm
	 */
	fm: number;
	/** */
	err: number;
};
//
type BCC = {
	SY: number;
	MO: number;
	LM: number;
	WTE: WarhtatExceptions;
	FME: Array<number[]>;
	MC: Array<number[]>;
	/**
	 * Search  2nd warso full moon day exceptions
	 * @param my Myanmar Year
	 */
	searchFme(my: number): number;
	wh19(my: number): number;
	nmwo(my: number): {
		nm: number;
		wo: number;
	};
	ky(my: number): number;
	by(my: number): number;
	e3(my: number): boolean;
	e2(my: number): boolean;
	e13(my: number): boolean;
	e12(my: number): boolean;
	e11(my: number): boolean;
	ta(my: number): number;
	tw(my: number): number;
	ed(my: number): number;
	nyt(my: number): number;
	whEra(my: number): number;
	ser2ndws(my: number): number;
	checkMmYear(my: number): CheckMmYear;
	mmyl(myt: number): number;
	mml(myt: number, mm: number): number;
	mp(myt: number, mm: number, md: number): number;
	mf(md: number): number;
	md(mf: number, mp: number, mm: number, myt: number): number;
	j2m(jdn: number): {
		myt: number;
		my: number;
		mm: number;
		md: number;
	};
};
//

export const bcc: BCC = {
	MO: 1954168.050623,
	SY: 1577917828 / 4320000,
	LM: 1577917828 / 53433336,
	WTE: {
		one: [1201, 1263, 1344],
		zero: [1202, 1264, 1345],
	},
	FME: [
		[1377, 1],
		//
		[1234, 1],
		[1261, -1],
		[1120, 1],
		[1126, -1],
		[1150, 1],
		[1172, -1],
		[1207, 1],
		[813, -1],
		[849, -1],
		[851, -1],
		[854, -1],
		[927, -1],
		[933, -1],
		[936, -1],
		[938, -1],
		[949, -1],
		[952, -1],
		[963, -1],
		[968, -1],
		[1039, -1],
		[205, 1],
		[246, 1],
		[471, 1],
		[572, -1],
		[651, 1],
		[653, 2],
		[656, 1],
		[672, 1],
		[729, 1],
		[767, -1],
	],
	// ၁၉နှစ်စက်ဝန်းအကြွင်းဇယား
	// မြန်မာနှစ်အား ၁၉ ဖြင့်စား အောက်ပါအကြွင်းများ သတ်မှတ်သည့်နှစ်ကာလအပိုင်းအလိုက်ရရှိပါက ဝါထပ်နှစ်ဖြစ်သည်
	MC: [
		//  ၁၂၁၆ ခုနှစ်အထိ အကြွင်း ( ၂၊ ၅၊ ၇၊ ၁ဝ၊ ၁၃၊ ၁၅၊ ၁၈ )
		[2, 5, 7, 10, 13, 15, 18],
		// ၁၂၁၇ ခုနှစ် မှ ၁၂၇၃ ခုနှစ်အထိ အကြွင်း  ( ၁၊ ၄၊ ၇၊ ၁ဝ၊ ၁၂၊ ၁၅၊ ၁၈ )
		[1, 4, 7, 10, 12, 15, 18],
		// ၁၂၇၄ ခုနှစ်မှ ၁၃၁၁ ခုနှစ်အထိ အကြွင်း ( ၁၊ ၄၊ ၇၊ ၉၊ ၁၂၊ ၁၅၊ ၁၈ )
		[1, 4, 7, 9, 12, 15, 18],
		// ၁၃၁၂ ခုနှစ်မှစ၍ အကြွင်း ( ၁၊ ၄၊ ၆၊ ၉၊ ၁၂၊ ၁၅၊ ၁၇ )
		[1, 4, 6, 9, 12, 15, 17],
	],
	ky(my: number): number {
		if (!Number.isInteger(my) || my <= 0) {
			throw new Error("Invalid Myanmar Year");
		}
		return my + 3739;
	},

	by(my: number): number {
		if (!Number.isInteger(my) || my <= 0) {
			throw new Error("Invalid Myanmar Year");
		}
		return my + 1182;
	},

	e3(my: number): boolean {
		return my >= 1312;
	},

	e2(my: number): boolean {
		return my < 1312 && my >= 1217;
	},

	e13(my: number): boolean {
		return my < 1217 && my >= 1100;
	},

	e12(my: number): boolean {
		return my < 1100 && my >= 798;
	},

	e11(my: number): boolean {
		return my < 798;
	},
	searchFme(n: number) {
		const a: number[] | undefined = this.FME.find((i) => i[0] === n);
		let r = 0;
		if (a !== undefined) {
			r = a[1];
		} else {
			r = 0;
		}
		return r;
	},
	wh19(my: number) {
		const c = my % 19;
		let r = 0;
		if (bcc.WTE.zero.includes(my)) {
			r = 0;
		} else if (bcc.WTE.one.includes(my)) {
			r = 1;
		} else if (my <= 1216) {
			r = bcc.MC[0].includes(c) ? 1 : 0;
		} else if (my >= 1217 && my <= 1273) {
			r = bcc.MC[1].includes(c) ? 1 : 0;
		} else if (my >= 1274 && my <= 1311) {
			r = bcc.MC[2].includes(c) ? 1 : 0;
		} else if (my >= 1312) {
			r = bcc.MC[3].includes(c) ? 1 : 0;
		}
		return r;
	},
	nmwo(my: number): { nm: number; wo: number } {
		let nm = 0;
		let wo = 0;
		if (bcc.e3(my)) {
			nm = 8;
			wo = -0.5;
		} else if (bcc.e2(my)) {
			nm = 4;
			wo = -1;
		} else if (bcc.e13(my)) {
			nm = -1;
			wo = -0.85;
		} else {
			nm = -1;
			wo = -1.1;
		}
		return { nm: nm, wo: wo + bcc.searchFme(my) };
	},

	ta(my: number): number {
		return (12 - bcc.nmwo(my).nm) * (bcc.SY / 12 - bcc.LM);
	},

	tw(my: number): number {
		return bcc.LM - bcc.nmwo(my).nm * (bcc.SY / 12 - bcc.LM);
	},

	ed(my: number): number {
		if (!Number.isInteger(my) || my <= 0) {
			throw new Error("Invalid Myanmar Year");
		}
		const kyValue: number = bcc.ky(my);
		const eday: number = (bcc.SY * kyValue) % bcc.LM;
		return eday < bcc.ta(my) ? eday + bcc.LM : eday;
	},

	nyt(my: number): number {
		return bcc.SY * my + bcc.MO;
	},
	whEra(my: number): number {
		const myt: number = bcc.ed(my) >= bcc.tw(my) ? 1 : 0;
		let r = 0;
		if (bcc.WTE.one.includes(my)) {
			r = 1;
		} else if (bcc.WTE.zero.includes(my)) {
			r = 0;
		} else {
			r = myt;
		}
		return r;
	},

	ser2ndws(my: number): number {
		return Math.round(
			bcc.nyt(my) - bcc.ed(my) + 4.5 * bcc.LM + bcc.nmwo(my).wo,
		);
	},
	checkMmYear(my: number): CheckMmYear {
		const a = bcc.whEra(my);
		const b1 = bcc.ser2ndws(my);
		let c = 0;
		let L = 0;
		let bs = 0;
		for (let i = 1; i < 4; i++) {
			bs = bcc.ser2ndws(my - i);
			c = bcc.whEra(my - i);
			L = i;
			if (c === 1) {
				break;
			}
		}
		const b3 = (b1 - bs) % 354;
		const myt = a === 0 ? a : Math.floor(b3 / 31) + a;
		const fm = a === 1 ? b1 : bs + 354 * L;
		const err = a === 1 && b3 !== 31 && b3 !== 30 ? 1 : 0;
		const tg1 = bs + 354 * L - 102;
		return { myt, tg1, fm, err };
	},
	mmyl(myt: number): number {
		return 354 + (1 - Math.floor(1 / (myt + 1))) * 30 + Math.floor(myt / 2);
	},
	mml(myt: number, mm: number): number {
		/* စုံ = ၃၀ မ = ၂၉ */
		let mml = 30 - (mm % 2);
		/*
     ဝါကြီးထပ်နှစ်အတွက် နယုန်လတွင်တစ်ရက်ပေါင်း
     29 + 1 = 30 days
     */
		if (mm === 3) {
			mml += Math.floor(myt / 2);
		}
		return mml;
	},
	mp(myt: number, mm: number, md: number): number {
		const ml = bcc.mml(myt, mm);
		return (
			Math.floor((md + 1) / 16) + Math.floor(md / 16) + Math.floor(md / ml)
		);
	},
	mf(md: number) {
		return md - 15 * Math.floor(md / 16);
	},
	md(mf: number, mp: number, mm: number, myt: number): number {
		const mml = bcc.mml(myt, mm);
		const m1 = mp % 2;
		const m2 = Math.floor(mp / 2);
		return m1 * (15 + m2 * (mml - 15)) + (1 - m1) * (mf + 15 * m2);
	},
	j2m(jdn: number): { myt: number; my: number; mm: number; md: number } {
		const j: number = Math.round(jdn);
		const my: number = Math.floor((j - 0.5 - bcc.MO) / bcc.SY);
		const yc: CheckMmYear = bcc.checkMmYear(my);
		/* ရက်အရေအတွက် */
		let dd: number = j - yc.tg1 + 1;
		const b: number = Math.floor(yc.myt / 2);
		const c: number = Math.floor(1 / (yc.myt + 1));

		const myl: number = 354 + (1 - c) * 30 + b;
		/* month type: late =1 or early = 0 */
		const mmt = Math.floor((dd - 1) / myl);
		dd -= mmt * myl;
		/* adjust day count and threshold */
		const a: number = Math.floor((dd + 423) / 512);
		let mm: number = Math.floor((dd - b * a + c * a * 30 + 29.26) / 29.544);
		const e: number = Math.floor((mm + 12) / 16);
		const f: number = Math.floor((mm + 11) / 16);
		const md: number =
			dd - Math.floor(29.544 * mm - 29.26) - b * e + c * f * 30;
		/* adjust month numbers for late months */
		mm += f * 3 - e * 4 + 12 * mmt;
		const myt: number = yc.myt;
		return {
			myt,
			my,
			mm,
			md,
		};
	},
};
//
