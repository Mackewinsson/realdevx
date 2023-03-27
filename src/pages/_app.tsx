import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </NextUIProvider>
  );
}
