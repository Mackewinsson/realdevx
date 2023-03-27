import Head from "next/head";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
const Component = () => <Button>Click me</Button>;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RealDevX</title>
        <meta name="description" content="RealDevX learn by doing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component />
    </>
  );
}
