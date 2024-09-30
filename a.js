import mmmark from "mm-mark";
import fs from "node:fs";
import path from "node:path";
import { globSync } from "glob";
import showdownMathjax from "showdown-mathjax";
import { icons } from "mm-mark";

const mdPath = path.join(process.cwd(), "posts");
const converter = mmmark.Converter({
  extensions: [showdownMathjax, icons],
});


const mdFiles = globSync(`${mdPath}/**/*.md`);

console.log(mdFiles);