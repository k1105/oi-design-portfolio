import Link from "next/link";
import { Poppins } from "next/font/google";

const PoppinsBold = Poppins({ weight: "800", subsets: ["latin"] });
const PoppinsNormal = Poppins({ weight: "400", subsets: ["latin"] });

export default function Navigation() {
  return (
    <>
      <nav>
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
        </div>
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          top: 100px;
          left: 30px;
          h1 {
            margin-bottom: 2rem;
          }
          .link {
            position: relative;
            display: block;
            margin-bottom: 1rem;
            padding-left: 1.5rem;
          }

          .link::before {
            position: absolute;
            content: "";
            top: 0.1rem;
            left: 0;
            border-radius: 0.6rem;
            width: 1.2rem;
            height: 1.2rem;
            display: block;
            background-color: var(--light-yellow);
          }

          a {
            text-decoration: none;
            color: black;
          }
        }

        @media screen and (max-width: 600px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
