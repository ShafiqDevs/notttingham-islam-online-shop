import Head from "next/head";
import Image from "next/image";
import NavBar from './../components/NavBar';
import Hero from "./../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nottingham Islam Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar scrollAt={244} cartCount={10}/>
      <Hero />

      <div className="h-[700px] w-full bg-gradient-to-r from-green-700/30 to-orange-700/30 opacity-50 ">
        <div className="bg-yellow-400 h-full w-full flex md:flex-row flex-col">

        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}
