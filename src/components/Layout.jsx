import React from "react";
import Header from "./home/Header";
import Hero from "./home/Hero";
import SpalshScreen from "./SpalshScreen";
import About from "./home/About";
import Experience from "./home/Experience";
import Portfolio from "./home/Portfolio";
import Footer from "./shared/Footer";
import MeCard from "./features/portfolio/MeCard";

function Layout() {
  return (
    <section className="w-full bg-white overflow-x-hidden">
      <SpalshScreen />
      <Header />
      <Hero />
      <About />
      <Experience />

      <div className="dark:bg-darkBgMedium pt-10">
        <Portfolio />
        <MeCard />
      </div>
      <div className="pt-44 dark:bg-darkBgMedium">
        <Footer />
      </div>
    </section>
  );
}

export default Layout;
