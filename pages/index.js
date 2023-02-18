import Head from "next/head";
import { Inter } from "@next/font/google";
import HomePage from "../components/homepage/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC</title>
        <meta
          name="description"
          content="Google Developer Student Club NIT Andhra Pradesh Chapter"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
