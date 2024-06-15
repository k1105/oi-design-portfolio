import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SOBOKU DESIGN</title>
        <meta name="description" content="portfolio by Yusei OI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>SOBOKU DESIGN</h1>
        <p>
          素朴とは「性質などが飾り気なく、自然のままであること」そのような意味があります。「SOBOKU
          DESIGN」はあなたの中の可愛い、カッコいい、美しい、好き
          etc...という「素朴＝本質」を引き出しデザインいたします。
        </p>
      </Layout>
    </>
  );
}
