import Head from "next/head";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Table from "../components/table";
import Navbar from "../components/navbar";
import Cards from "../components/cards";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Usd valt</title>
        <meta name="description" content="test with antd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Cards />
      <Table />
    </div>
  );
}
