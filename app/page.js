"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Header from "./components/header";
import PEG from "./components/PEG";
import Hero from "./components/hero";
import Legends from "./components/legends";
import Values from "./components/values";
import ArKa from "./components/ArKa";
import Events from "./components/events";
import Social from "./components/social";
import ScrollVelocity from "./components/scrollVelocity";
import Insights from "./components/insights";
import OathCeremony from "./components/oath";
import Memoirs from "./components/memoirs";
import BecomeAVAYUZer from "./components/VAYUZer";
import VerticalLogoButton from "./components/buttons/VerticalLogoButton";
import BottomNavigation from "./components/buttons/BottomNavigation";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ScrollSnap({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="section">
      <div className="section-div" ref={ref}>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(scrollYProgress);

  // Add state to determine whether to make the third section sticky
  const [isSticky, setIsSticky] = useState(false);

  // Change the value to trigger the sticky effect
  const triggerSticky = 0.5; // Adjust this value based on your needs

  // Update the state when the scrollYProgress exceeds the triggerSticky value
  useEffect(() => {
    if (scrollYProgress > triggerSticky) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [scrollYProgress]);

  // Function to handle scrolling to the corresponding section
  const scrollToSection = (id) => {
    const section = document.getElementById(`section-${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id={1} className="relative flex flex-col overflow-hidden">
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
      {/* SBUs Section */}
      {/* <div className={`sticky-container ${isSticky ? "sticky" : ""}`}></div> */}
      <ScrollSnap>
        <PEG />
        {/* gads
         */}
        {/* <ArKa /> */}
      </ScrollSnap>
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
