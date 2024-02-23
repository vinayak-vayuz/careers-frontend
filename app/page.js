"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/header";
import Hero from "./components/hero";
import Legends from "./components/legends";
import Values from "./components/values";
import Events from "./components/events";
import Social from "./components/social";
import Insights from "./components/insights";
import OathCeremony from "./components/oath";
import Memoirs from "./components/memoirs";
import BecomeAVAYUZer from "./components/VAYUZer";
import VerticalLogoButton from "./components/buttons/VerticalLogoButton";
import BottomNavigation from "./components/buttons/BottomNavigation";
import Test from "./components/test";
import SBUs from "./components/SBUs";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Function to handle scrolling to the corresponding section
  const scrollToSection = (id) => {
    const section = document.getElementById(`section-${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id={1} className="relative flex flex-col">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Vetical Button */}
      <VerticalLogoButton onclick={scrollToSection} />
      {/* Bottom Navigation */}
      <BottomNavigation />
      {/* Values Section */}
      <Values id={2} />
      {/* Test */}
      <Test/>
      {/* SBUs Section */}
      <SBUs />
      {/* Legends Section */}
      <Legends />
      {/* Events Section */}
      <Events />
      {/* Social Section */}
      <Social id={3} />
      {/* Insights Section */}
      <Insights id={4} />
      {/* Oath Ceremony */}
      <OathCeremony />
      {/* Memoirs */}
      <Memoirs />
      {/* Become a VAYUZer */}
      <BecomeAVAYUZer id={5} />
      {/* Progess Bar */}
      <motion.div
        className="progress fixed left-0 right-0 bottom-2 sm:bottom-0 h-2 bg-[#fafafa]"
        style={{ scaleX }}
      />
    </main>
  );
}
