import fs from "node:fs";
import { transformContent } from "bagancss";

const files: string[] = ["./styles/main.css", "./styles/custom.css"];
let contents: string[] = [];
//
files.map((i) => {
  contents.push(fs.readFileSync(i, "utf8"));
});
const cc: string = contents.join("\n");
if (fs.existsSync("./src/globals.css")) {
  fs.unlinkSync("./src/globals.css");
}
if (fs.existsSync("./src/globals.css.map")) {
  fs.unlinkSync("./src/globals.css.map");
}
transformContent({
  content: cc,
  fileName: "globals.css",
  write: true,
  outDir: "app",
  minify: true,
  sourceMap: true,
});
