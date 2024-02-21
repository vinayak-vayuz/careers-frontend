import Image from "next/image";
import ArKa from "../SBUs/ArKa";
import PEGContent from "../SBUs/PEG";
import RapidExchange from "../SBUs/Rapid";
import HundredX from "../SBUs/100x";
import BusinessImpact from "../SBUs/Buisness";
import PeopleGroup from "../SBUs/People";
import Stealth from "../SBUs/Stealth";
import { Bungee, Cherry_Bomb_One } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});
const cherry_Bomb_One = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});

export default function SBUs() {
  return (
    <>
      <section className="bg-[#141414] px-2 md:px-14 py-10 my-auto">
        <div className="w-full flex flex-col md:flex-row items-start gap-x-20 gap-y-10">
          <div className="relative md:sticky md:top-20 md:w-1/2 md:block">
            <div
              className={`w-full min-h-[80vh] flex flex-col justify-between gap-5`}
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
              <div className="relative flex sm:hidden flex-col justify-between items-center gap-10">
                <Image
                  src={"/images/teal_bg.svg"}
                  width={334}
                  height={702}
                  alt=""
                />
                <div>
                  <Image
                    className="scale-75 absolute -top-5 -right-5"
                    src={"/images/bubble.svg"}
                    width={252}
                    height={184}
                    alt=""
                  />
                  <h1
                    className={`${cherry_Bomb_One.className} text-2xl text-center text-white absolute top-10 right-14 -rotate-12`}
                  >
                    We Can &<br />
                    we will!!
                  </h1>
                </div>
                <Image
                  className="scale-50 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                  src={"/images/peg.svg"}
                  width={287}
                  height={197}
                  alt=""
                />
                <Image
                  src={"/images/pink_circle.svg"}
                  width={334}
                  height={702}
                  alt=""
                />
              </div>
              <p className="text-[#DDDDDD]">
                The Product Engineering Group pioneers technological innovation,
                crafting market-leading solutions through creativity, precision,
                and a commitment to excellence. Join our transformative journey.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-175 md:w-1/2 md:gap-y-[50vh]">
            <PEGContent />
            <ArKa />
            <RapidExchange />
            <HundredX />
            <BusinessImpact />
            <PeopleGroup />
            <Stealth />
          </div>
        </div>
      </section>
    </>
  );
}
