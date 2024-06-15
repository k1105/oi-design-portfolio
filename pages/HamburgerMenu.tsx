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

        <div className={`${PoppinsNormal.className} link-container`}>
          <Link href="/works">
            <p className="link">Work</p>
          </Link>
          <Link href="/about">
            <p className="link">About</p>
          </Link>
          <Link href="/study">
            <p className="link">Study</p>
          </Link>
        </div>
        <p className="contact">
          Tel: 080-8264-1961
          <br />
          Email: design.oioi.0127@gmail.com
          <br /> Instagram: oioi_0127 / soboku_design
        </p>
      </div>
      <style jsx>{`
        .main {
          z-index: 90;
          width: 100vw;
          height: 100vh;
          padding: 20vh 5vw;
          background-color: var(--light-yellow);

          .link-container {
            display: flex;
            width: 15.5rem; //(n(Y,u,s,e,O) + n(i,i,space)/2 = 6.5)*(font-size = 4rem)
            justify-content: space-between;
            margin-left: 1rem;
          }

          h1 {
            font-size: 4rem;
          }

          a {
            text-decoration: none;
            font-size: 1.5rem;
            color: black;
          }

          .contact {
            position: absolute;
            bottom: 2rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
