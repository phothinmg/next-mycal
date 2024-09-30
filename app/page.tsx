import NavBar from "./components/nav";
import PostComponent from "./components/post-component/posts";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <NavBar />
      <h4>About Project</h4>
      <pre>
        The study of Burmese Calander calculation.
        <br />
        == In Progress ==
      </pre>
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
