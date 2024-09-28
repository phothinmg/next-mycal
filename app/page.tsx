import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.hmdev}>
      <div className={styles.home}>
        <h1>MyCal</h1>
        <hr />
        <pre>Calculation of Myanmar Calendar</pre>
        <ol>
          <li>
            {" "}
            <Link href={"/julian_date"} target="_blank" className={styles.lnk}>
              Julian Date Converter
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}
