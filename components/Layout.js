import Head from "next/head";
import Nav from "./Nav";

export default function Layout({children}) {
  return (
    <div className="container">
      <Head>
        <title>Vigor Arisandi</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      {children}
    </div>
  );
}
