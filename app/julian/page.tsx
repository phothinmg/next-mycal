import type { Metadata } from "next";
import React, { memo } from "react";
import NavBar from "../components/nav";
import PostComponent from "../components/post-component/posts";

//

export const metadata: Metadata = {
  title: "Gregorian",
};

const Julian: React.FC = memo(function Julian() {
  return (
    <section>
      <NavBar />
      <PostComponent filePath="julian.md" />
    </section>
  );
});

export default Julian;
