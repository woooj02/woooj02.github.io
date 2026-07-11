import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../HeroSection";
import Featured from "../Featured";
import MyPortfolio from "../MyPortfolio";
import AboutMe from "../AboutMe";
import Blog from "../Blog";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.state]);

  return (
    <>
      <HeroSection />
      <Featured />
      <MyPortfolio />
      <AboutMe />
      <Blog />
      <ContactMe />
      <Footer />
    </>
  );
}
