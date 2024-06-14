import Link from "next/link";
import { Poppins } from "next/font/google";
import HamburgerMenu from "./HamburgerMenu";
import { useRef } from "react";

const PoppinsBold = Poppins({ weight: "800", subsets: ["latin"] });
const PoppinsNormal = Poppins({ weight: "400", subsets: ["latin"] });

export default function Navigation() {
  const hamburgerMenuWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <nav>
        <div className="pc-nav">
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
        <div
          className="sp-nav"
          onClick={() => (hamburgerMenuWrapperRef.current!.style.top = "0")}
        >
          <div
            ref={hamburgerMenuWrapperRef}
            style={{
              position: "fixed",
              top: "-100vh",
              left: "0",
              transition: "all ease 0.5s",
            }}
          >
            <HamburgerMenu />
          </div>
        </div>
      </nav>
      <style jsx>{`
        .pc-nav {
          position: fixed;
          top: 0;
          left: 0;
          padding-top: 100px;
          margin-left: 30px;
          width: 15vw;
          height: 100vh;
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

        .sp-nav {
          display: none;
        }

        .contact {
          position: absolute;
          bottom: 2rem;
          font-size: 0.8rem;
        }

        @media screen and (max-width: 600px) {
          .pc-nav {
            display: none;
          }

          .sp-nav {
            display: block;
            position: fixed;
            z-index: 99;
            right: 3vw;
            top: 30px;
            background-color: var(--light-yellow);
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  );
}
