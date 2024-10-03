import fs from "node:fs";
import path from "node:path";
import mmmark from "mm-mark";
import { customClass, icons } from "mm-mark";
import showdownPrism from "showdown-prism";

export const converter = mmmark.Converter({
	extensions: [
		icons,
		showdownPrism({
			theme: "gruvbox-light",
			languages: ["ts"],
		}),
		customClass,
	],
});

export const mdConverter = (filePath: string) => {
	const dir = path.join(process.cwd(), "posts");
	const mdFile = path.join(dir, filePath);
	const content = fs.readFileSync(mdFile, "utf8");
	const ct = mmmark.frontmatter(content);
	const mdContent = ct.content;
	return converter.makeHtml(mdContent);
};
