import Link from "next/link";
import NavBar from "./components/Nav";

export default function Home() {
	return (
		<section>
			<NavBar />
			<h4>About Project</h4>
			<p> The Study of date , time , moon phases calculation.</p>
			<hr />
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
					<Link href={"./moon/full-moon"}>Full Moon Days</Link>
				</li>
				<li>
					<Link href={"./moon/moon-age"}>Moon Age</Link>
				</li>
			</ul>
		</section>
	);
}
