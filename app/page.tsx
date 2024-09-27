import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
export default function Home() {
  return (
    <section className={styles.hmdev}>
      <div className={styles.home}>
        <h1>MyCal</h1>
        <hr />
        <ol>
          <li>
            {" "}
            <Link
              href={"/julian_date_converter"}
              target="_blank"
              className={styles.lnk}
            >
              Julian Date Converter
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}
