"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
// import "./swiper.css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
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

  return (
    <main className="relative flex flex-col gap-2">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Values Section */}
      <Values />
      {/* SBUs Section */}
      <ScrollSnap>
        <PEG />
      </ScrollSnap>
      {/* Legends Section */}
      <Legends />
      <motion.div className="progress" style={{ scaleX }} />
    </main>
  );
}
