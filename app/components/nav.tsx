import React, { memo } from "react";
import Link from "next/link";

const NavBar = memo(function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li style={{ fontSize: "18px" }}>
            <Link href={"/"} className="nav-link">
              Project MyCal
            </Link>
          </li>
          <li className="float-right">
            <a href="#" data-theme-toggle style={{ fontSize: 18 }}></a>
          </li>
          <li className="float-right">
            <Link href={"/julian"} className={"nav-link"}>
              Julian
            </Link>
          </li>
          <li className="float-right">
            <Link href={"/gregorian"} className={"nav-link"}>
              Gregorian
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default NavBar;
