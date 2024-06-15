import styles from "@/styles/Layout.module.css";
import Head from "next/head";
import Navigation from "./Navigation";
import { Open_Sans } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { Poppins } from "next/font/google";

const PoppinsBold = Poppins({ weight: "800", subsets: ["latin"] });
const PoppinsNormal = Poppins({ weight: "400", subsets: ["latin"] });
const EnFont = Open_Sans({ weight: "400", subsets: ["latin"] });
const JaFont = Zen_Kaku_Gothic_New({ weight: "400", subsets: ["latin-ext"] });

export default function Layout({
  children,
  pageTitle,
  headline,
  width = "nomal",
}: {
  children: React.ReactNode;
  pageTitle?: string;
  headline?: string;
  width?: "wide" | "nomal";
}) {
  return (
    <>
      <Head>
        <title>
          {pageTitle ? `${pageTitle} | SOBOKU DESIGN` : "SOBOKU DESIGN"}
        </title>
        <meta
          property="og:title"
          content={pageTitle ? `${pageTitle} | SOBOKU DESIGN` : "SOBOKU DESIGN"}
        />
        <meta property="og:description" content="portfolio by Yusei OI" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://daisan-kazoku.vercel.app" /> */}
        {/* <meta
          property="og:image"
          content="https://daisan-kazoku.vercel.app/ogp.png"
        /> */}
        <meta
          property="og:site_name"
          content={pageTitle ? `${pageTitle} | SOBOKU DESIGN` : "SOBOKU DESIGN"}
        />
        <meta property="og:locale" content="ja_JP" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@daisan_kazoku" /> */}
      </Head>
      <Navigation />
      <main
        className={`${styles.main} ${EnFont.className} ${JaFont.className} ${
          width == "wide" && styles.wide
        }`}
      >
        {headline && (
          <h1 className={`${PoppinsBold.className} ${styles.headline}`}>
            {headline}
          </h1>
        )}

        {children}
      </main>
    </>
  );
}
