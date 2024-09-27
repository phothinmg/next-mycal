import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link href={"/julian_date_converter"}>Converter</Link>
    </div>
  );
}
