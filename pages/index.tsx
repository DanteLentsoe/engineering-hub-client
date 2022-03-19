import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Feed from "../components/feed";
import UploadImgModal from "../components/modals/uploadImgModal";

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-100 scrollbar-hide ">
      <Head>
        <title>Engineering Hub | Home</title>
        <meta
          name="description"
          content="Engineering Hub is a web platform intented to help engineers collaborate and share ideas and information about Software "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <UploadImgModal />
    </div>
  );
};

export default Home;
