import React from "react";
import mmmark from "mm-mark";
import fs from "node:fs";
import path from "node:path";
import { icons } from "mm-mark";
import { frontMatter } from "./frontmatter";
import showdownPrism from "./prismext";
//

const converter = mmmark.Converter({
  extensions: [icons, showdownPrism],
});

const PostComponent: React.FC<{ filePath: string }> = ({ filePath }) => {
  const mdPath = path.join(process.cwd(), "posts");
  const mdFile = path.join(mdPath, filePath);
  const md_content = fs.readFileSync(mdFile, "utf8");
  const ct = frontMatter(md_content);
  const mdContent = ct.content;
  const htmlContent = converter.makeHtml(mdContent);
  const html = { __html: htmlContent };
  return <div dangerouslySetInnerHTML={html} className="post-body"></div>;
};
export default PostComponent;
