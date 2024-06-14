import Link from "next/link";
import { Poppins } from "next/font/google";

const PoppinsBold = Poppins({ weight: "800", subsets: ["latin"] });
const PoppinsNormal = Poppins({ weight: "400", subsets: ["latin"] });

export default function HamburgerMenu() {
  return (
    <>
      <div className="main">
        <Link href="/">
          <h1 className={PoppinsBold.className}>Yusei Oi</h1>
        </Link>

        <div className={PoppinsNormal.className}>
          <Link href="/works">
            <p className="link">Work</p>
          </Link>
          <Link href="/about">
            <p className="link">About</p>
          </Link>
          <Link href="/study">
            <p className="link">Study</p>
          </Link>
          <p className="contact">
            Tel: 080-8264-1961 Email: design.oioi.0127@gmail.com Instagram:
            oioi_0127 / soboku_design
          </p>
        </div>
      </div>
      <style jsx>{`
        .main {
          z-index: 90;
          width: 100vw;
          height: 100vh;
          padding: 10vw 10px;
          background-color: var(--light-yellow);
        }
      `}</style>
    </>
  );
}
