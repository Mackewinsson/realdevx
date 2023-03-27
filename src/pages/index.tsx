import Head from "next/head";
import { Inter } from "next/font/google";
import { ButtonComponent } from "components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RealDevX</title>
        <meta name="description" content="RealDevX learn by doing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ButtonComponent />
    </>
  );
}
