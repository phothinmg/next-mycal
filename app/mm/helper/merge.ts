import { existsSync } from "../main-deps/fs.ts";

const replaceTrue = (line: string) =>
	!(line.includes("export type") || line.includes("export class Mmcal"));
//
export default async function mergeFiles(
	files: string[],
	outFile: string,
	genFunc: (text: string) => string,
	addText?: string[],
): Promise<void> {
	if (existsSync(outFile)) {
		await Deno.remove(outFile);
	}
	const addtext = addText ?? [];
	const content = files.map((f) => Deno.readFileSync(f)).join("\n");
	const lines = content.split("\n");
	const lns = lines.map((l) => l.replace(/^import .*$/gm, ""));
	const lss: string[] = [];
	lns.map((i) => {
		let ii = "";
		if (replaceTrue(i)) {
			ii = i.replace(/export\s+/g, "");
		} else {
			ii = i;
		}
		lss.push(ii);
	});
	const texts: string[] = [lss.join("\n"), addtext.join("\n")];
	const tx = texts.join("\n");
	const fls = genFunc(tx);
	await Deno.writeTextFile(outFile, fls);
}
