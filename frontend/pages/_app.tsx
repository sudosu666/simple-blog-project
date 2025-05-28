import type { AppProps } from "next/app";
import ChatButton from "../components/ChatButton";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ChatButton />
    </>
  );
}
