import { Bungee, Cherry_Bomb_One } from "next/font/google";
import Image from "next/image";
import React from "react";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const cherry_Bomb_One = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <main
      className={`${bungee.className} w-full min-h-screen sm:min-h-[calc(100vh-100px)] relative flex flex-col justify-center items-center text-center`}
    >
      <h1 className="text-[28px] xl:text-[85px] xl:leading-[100px] flex justify-center items-center gap-4">
        <span className="text-white">We Are</span>
        <span className="font-outline-2">People</span>
      </h1>
      <h1 className="text-[28px] xl:text-[85px] xl:leading-[100px] flex justify-center items-center gap-4">
        <div>
          <span className="text-white">W</span>
          <span className="font-outline-2">ho</span>
        </div>
        <div>
          <span className="font-outline-2">ca</span>
          <span className="text-white">re</span>
        </div>
        <div>
          <span className="text-white">A</span>
          <span className="font-outline-2">bout</span>
        </div>
      </h1>
      <h1 className="text-[28px] xl:text-[85px] xl:leading-[100px]">
        <span className="text-white">Y</span>
        <span className="font-outline-2">o</span>
        <span className="text-white">u</span>
      </h1>
      <div
        className={`${cherry_Bomb_One.className} absolute top-[62%] -translate-y-1/2 left-[17%] text-white text-2xl`}
      >
        <h1>#Roadto100</h1>
      </div>
      <Image
        className="fixed top-[50%] -translate-y-[50%] left-4"
        src={"/images/vayuz_vertical.svg"}
        width={26}
        height={214}
        alt=""
      />
    </main>
  );
};

export default Hero;
