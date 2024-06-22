import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CategoryProvider } from "./works/CategoryContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CategoryProvider>
      <Component {...pageProps} />
    </CategoryProvider>
  );
}
