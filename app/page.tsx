import NavBar from "./components/Nav";
import PostComponent from "./components/post-component/posts";
import Link from "next/link";
import dynamic from "next/dynamic";

const MoonNoSSR = dynamic(() => import("./components/moon-age/moon_age"), {
  ssr: false,
});

export default function Home() {
  return (
    <section>
      <NavBar />
      <h4>About Project</h4>
      <pre>
        The Study of date , time , moon phases calculation.
        <br />
        == In Progress ==
      </pre>
      <MoonNoSSR />
      <ul>
        <li>
          <Link href={"./gregorian/converter"}>
            Date Time to Julian Date Converter
          </Link>
        </li>
        <li>
          <Link href={"./julian/converter"}>
            Julian Date to Date Time Converter
          </Link>
        </li>
        <li>
          <Link href={"./moon"}>Full Moon Days</Link>
        </li>
      </ul>
    </section>
  );
}
