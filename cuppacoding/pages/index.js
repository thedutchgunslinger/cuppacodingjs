import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";
import Exercises from "@/components/exercises";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className={HomeStyle.container}>
        <Nav />
        <Exercises />
      </div>
    </>
  );
}
