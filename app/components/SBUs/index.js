import Image from "next/image";
import PEG from "../SBUs/PEG";
import ArKa from "../SBUs/ArKa";
import HundredX from "../SBUs/100x";
import Stealth from "../SBUs/Stealth";
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

    for (const [key, ref] of Object.entries(sbuRefs)) {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
          setActiveSBU(key);
        }
      }
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
      <section className="max-w-[80rem] bg-[#141414] px-2 md:px-14 py-10 my-auto">
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
              <p className="hidden md:block text-[#DDDDDD]">
                {activeSBU === "PEG" &&
                  "The Product Engineering Group pioneers technological innovation, crafting market-leading solutions through creativity, precision, and a commitment to excellence. Join our transformative journey."}
                {activeSBU === "ArKa" && "Your ArKa content here..."}
                {activeSBU === "RapidExchange" &&
                  "Your RapidExchange content here..."}
                {/* The Product Engineering Group pioneers technological innovation,
                crafting market-leading solutions through creativity, precision,
                and a commitment to excellence. Join our transformative journey. */}
              </p>
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
