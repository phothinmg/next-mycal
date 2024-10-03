import Link from "next/link";
import React, { memo } from "react";

const NavBar = memo(function NavBar() {
	return (
		<header>
			<nav>
				<ul>
					<li style={{ fontSize: "18px" }}>
						<Link href={"/"} className="nav-link">
							MyCal
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
});

export default NavBar;
