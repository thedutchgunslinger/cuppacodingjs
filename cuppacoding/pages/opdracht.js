import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";

export default function Opdracht() {
  return (
    <>
      <div className={HomeStyle.container}>
        <Nav />
      </div>
    </>
  );
}
