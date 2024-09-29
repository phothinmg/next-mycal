import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section>
      <div className={styles.home}>
        <h1>MyCal</h1>
        <div className="nav">
          <Link href={"/julian"} target="_blank" className={"link"}>
            JulianDate
          </Link>
        </div>
        <hr />
        <div className="converter">
          <p>
            <b>မိတ်ဆက်</b>
          </p>
          <p>
          မြန်မာပြက္ခဒိန်တွက်ချက်မှုဆိုင်ရာများလေ့လာရန်ရည်ရွယ်ပါသည်။
          </p>
        </div>
      </div>
    </section>
  );
}
