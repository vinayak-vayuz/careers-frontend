import PEG from "../SBUs/PEG";
import ArKa from "../SBUs/ArKa";
import HundredX from "../SBUs/100x";
import Stealth from "../SBUs/Stealth";
import { motion } from "framer-motion";
import PeopleGroup from "../SBUs/People";
import RapidExchange from "../SBUs/Rapid";
import { Bungee } from "next/font/google";
import BusinessImpact from "../SBUs/Buisness";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export default function SBUs() {
  const [activeSBU, setActiveSBU] = useState("PEG");

  const sbuRefs = {
    PEG: useRef(null),
    ArKa: useRef(null),
    RapidExchange: useRef(null),
    HundredX: useRef(null),
    BusinessImpact: useRef(null),
    PeopleGroup: useRef(null),
    Stealth: useRef(null),
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    console.log(scrollPosition);
    switch (true) {
      case scrollPosition >= 2000 && scrollPosition < 2500:
        setActiveSBU("PEG");
        break;
      case scrollPosition >= 2250 && scrollPosition < 3000:
        setActiveSBU("ArKa");
        break;
      case scrollPosition >= 3000 && scrollPosition < 3800:
        setActiveSBU("RapidExchange");
        break;
      case scrollPosition >= 3800 && scrollPosition < 4700:
        setActiveSBU("HundredX");
        break;
      case scrollPosition >= 4700 && scrollPosition < 5500:
        setActiveSBU("BusinessImpact");
        break;
      case scrollPosition >= 5500 && scrollPosition < 6300:
        setActiveSBU("PeopleGroup");
        break;
      case scrollPosition >= 6300:
        setActiveSBU("Stealth");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeSBU, "SBU");
  return (
    <>
      <section className="bg-[#141414] px-2 md:px-14 py-10 my-auto">
        <div className="w-full flex flex-col md:flex-row items-start gap-x-20 gap-y-10">
          <div className="relative md:sticky md:top-20 md:w-1/2 md:block">
            <div
              className={`w-full sm:min-h-[80vh] flex flex-col justify-between gap-5`}
            >
              <div>
                <div>
                  <h1 className={`${bungee.className} text-8xl text-white`}>
                    Our
                  </h1>
                  <h1 className={`${bungee.className} text-8xl text-white`}>
                    SBUs
                  </h1>
                </div>
                <p className="text-[#DDDDDD]">
                  Empowering Futures, Unleashing Potential: Our SBUs - Pillars
                  of Excellence in Every Endeavor.
                </p>
              </div>
              <motion.p className="hidden md:block text-[#DDDDDD] transition-all ease-in-out duration-300">
                {activeSBU === "PEG" &&
                  "The Product Engineering Group pioneers technological innovation, crafting market-leading solutions through creativity, precision, and a commitment to excellence. Join our transformative journey."}
                {activeSBU === "ArKa" &&
                  "Arka is where UI/UX is a way of life, sculpting digital experiences with intuitive interfaces that redefine user engagement through design artistry and precision."}
                {activeSBU === "RapidExchange" &&
                  "Welcome to Rapid Exchange, our strategic business unit connecting clients with top-tier talent, fostering growth through skilled and dedicated professionals."}
                {activeSBU === "HundredX" &&
                  "Meet 100 X, a cutting-edge marketing team driving success through creativity, strategy, and groundbreaking campaigns that leave a lasting impact."}
                {activeSBU === "BusinessImpact" &&
                  "The Business Impact Group, a dynamic consortium, propels transformative corporate change through innovation, strategic foresight, and collaborative excellence, shaping a resilient future."}
                {activeSBU === "PeopleGroup" &&
                  "Introducing our People's Champions, the heart of our organization, dedicated to nurturing talent, fostering a vibrant workplace, and empowering individuals."}
                {activeSBU === "Stealth" &&
                  "In Stealth, we silently architect organizational evolution, dedicating our SBU to strategic planning, fostering growth through unseen pathways, and crafting precise futures."}
              </motion.p>
            </div>
          </div>
          <div className="hidden sm:flex w-full flex-col gap-y-10 md:w-1/2 md:gap-y-[50vh] snap-y">
            <PEG />
            <ArKa />
            <RapidExchange />
            <HundredX />
            <BusinessImpact />
            <PeopleGroup />
            <Stealth />
          </div>
          <div className="block sm:hidden w-full">
            <Swiper
              className={"mySwiper py-10"}
              // slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                576: {
                  // width: 576,
                  slidesPerView: 2,
                },
                768: {
                  // width: 768,
                  slidesPerView: 3,
                },
                1024: {
                  // width: 768,
                  slidesPerView: 3,
                },
              }}
              modules={[FreeMode]}
            >
              <SwiperSlide>
                <PEG />
              </SwiperSlide>
              <SwiperSlide>
                <ArKa />
              </SwiperSlide>
              <SwiperSlide>
                <RapidExchange />
              </SwiperSlide>
              <SwiperSlide>
                <HundredX />
              </SwiperSlide>
              <SwiperSlide>
                <BusinessImpact />
              </SwiperSlide>
              <SwiperSlide>
                <PeopleGroup />
              </SwiperSlide>
              <SwiperSlide>
                <Stealth />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
