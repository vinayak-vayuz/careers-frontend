import { Bungee } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const bungee = Bungee({
    weight: "400",
    subsets: ["latin"],
  });

const Legends = () => {
  const [legend, setLegend] = useState(true);
  const [legendexp, setLegendexp] = useState(true);

  const handleLegend = () => {
    setLegend(!legend);
  };
  const handleLegendexp = () => {
    setLegendexp(!legendexp);
  };

  const legendData = [
    { imageSrc: "/images/monika.png", width: 200, height: 200 },
    { imageSrc: "/images/suhani.png", width: 200, height: 200 },
    { imageSrc: "/images/saurabh.png", width: 200, height: 200 },
    {
      imageSrc: "/images/bidyut.png",
      imageExpSrc: "/images/bidyut_color.png",
      width: 200,
      height: 200,
    },
    { imageSrc: "/images/ujjawal.png", width: 200, height: 200 },
    { imageSrc: "/images/priya.png", width: 200, height: 200 },
  ];

  const vipData = [
    { imageSrc: "/images/ayush.png", width: 334, height: 330 },
    { imageSrc: "/images/raja.png", width: 330, height: 473 },
    { imageSrc: "/images/monika.png", width: 331, height: 330 },
    { imageSrc: "/images/ujjawal.png", width: 330, height: 473 },
    { imageSrc: "/images/suhani_lg.png", width: 330, height: 473 },
    { imageSrc: "/images/bhupendra.png", width: 330, height: 330 },
    { imageSrc: "/images/sneha.png", width: 330, height: 473 },
    { imageSrc: "/images/kushagra.png", width: 330, height: 330 },
    { imageSrc: "/images/saurabh.png", width: 330, height: 473 },
    { imageSrc: "/images/someone.png", width: 330, height: 473 },
    { imageSrc: "/images/anupriya.png", width: 330, height: 330 },
    { imageSrc: "/images/someone_2.png", width: 330, height: 473 },
  ];
  return (
    <main className="relative px-4 w-full max-h-screen flex">
      {legend ? (
        <div className="flex">
          <div className="w-full md:w-[35%] flex flex-col md:flex-row gap-2">
            <div className="flex flex-wrap gap-2">
              {legendData.map((data, index) => (
                <Image
                  onClick={handleLegendexp}
                  key={index}
                  width={200}
                  height={200}
                  src={legendexp ? data.imageSrc : data.imageExpSrc}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-[63%] md:min-h-screen flex items-center gap-2">
            {legendexp ? (
              <div>
                <h1 className={`${bungee.className} text-8xl text-white`}>
                  Our
                </h1>
                <h1 className={`${bungee.className} text-8xl text-white`}>
                  Legend
                </h1>
                <p className="text-lg text-[#DDDDDD]">
                  Legends are born when ordinary individuals go beyond the call
                  of duty, creating benchmarks of excellence that inspire the
                  world to reach new heights
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <Image
            className="w-32 absolute bottom-0 right-0"
            src={"/icons/proud_vayuzer.svg"}
            width={199}
            height={200}
            s
          />
        </div>
      ) : (
        <div className="w-full max-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {vipData.map((data, index) => (
            <Image
              className="-hue-rotate-60"
              key={index}
              src={data.imageSrc}
              width={data.width}
              height={data.height}
            />
          ))}
        </div>
      )}
      {legend ? (
        <button
          onClick={handleLegend}
          className="absolute top-1/2 -translate-y-1/2 right-0"
        >
          <Image src={"/images/vip_button.svg"} width={27} height={484} />
        </button>
      ) : (
        <button
          onClick={handleLegend}
          className="absolute top-1/2 -translate-y-1/2 left-0"
        >
          <Image src={"/images/back_button.svg"} width={27} height={331} />
        </button>
      )}
    </main>
  );
};

export default Legends;