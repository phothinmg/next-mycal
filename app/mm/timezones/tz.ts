import mergeFiles from "../helper/merge";
const tx = (tx: string): string => {
	const a = `
    /* cSpell:disable */
    // This is generated file , don't edit
    ${tx}
    export{get_offset}
    `;
	return a;
};

const entries: string[] = ["./lib/tz/tztype.ts", "./lib/tz/get_offset.ts"];

await mergeFiles(entries, "./lib/timezones/mod.ts", tx);
