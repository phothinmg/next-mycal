import NavBar from "./components/nav";
import PostComponent from "./components/post-component/posts";

export default function Home() {
  return (
    <section>
      <NavBar />
      <PostComponent filePath="home.md" />
    </section>
  );
}
