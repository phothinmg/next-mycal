import type React from "react";
import { mdConverter } from "./index";

//

const PostComponent: React.FC<{ filePath: string }> = ({ filePath }) => {
  const htmlContent = mdConverter(filePath);
  const html = { __html: htmlContent };
  return <div id="mark" className="post-body" dangerouslySetInnerHTML={html} />;
};
export default PostComponent;
