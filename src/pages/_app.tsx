import "@/styles/globals.css";
import { TelegramProvider } from "@/telegram/TelegramProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TelegramProvider>
      <Component {...pageProps} />
    </TelegramProvider>
  );
}
