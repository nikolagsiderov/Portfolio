import Clouds from "../components/effects/Clouds";
import Stars from "../components/effects/Stars";
import Waves from "../components/effects/Waves";
import Right from "../components/right/Right";
import Moon from "../components/effects/Moon";
import Left from "../components/left/Left";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import { FaArrowCircleUp } from "react-icons/fa";

const Home: NextPage = () => {
  const isBrowser = () => typeof window !== "undefined";
  const [section, setSection] = useState("work");

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div id="homescreen" className="relative">
      <Head>
        <title>Hello, I&apos;m Nikola Siderov.</title>
        <meta
          name="description"
          content="Software developer personal portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Moon />
      <Clouds />
      <Stars />
      <Waves />
      <div className="w-full h-full relative p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2">
        <Left section={section} />
        <Right setSection={setSection} />
        <button
          id="scrollUpButton"
          className="fixed bottom-0 right-0 m-10"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp size={50} />
        </button>
      </div>
    </div>
  );
};

export default Home;
