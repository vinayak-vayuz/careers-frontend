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
  const [id, setId] = useState(0);

  const handleLegend = () => {
    setLegend(!legend);
  };
  const handleLegendexp = ({ id }) => {
    setId(id);
    setLegendexp(!legendexp);
  };

  const legendData = [
    {
      id: 1,
      imageSrc: "/images/people/monika.png",
      imageExpSrc: "/images/people/monika_color.png",
      name: "Monika",
      width: 200,
      height: 200,
    },
    {
      id: 2,
      imageSrc: "/images/people/suhani.png",
      imageExpSrc: "/images/people/suhani_color.png ",
      name: "Suhani",
      width: 200,
      height: 200,
    },
    {
      id: 3,
      imageSrc: "/images/people/saurabh.png",
      imageExpSrc: "/images/people/saurabh_color.png",
      name: "Saurabh",
      width: 200,
      height: 200,
    },
    {
      id: 4,
      imageSrc: "/images/people/bidyut.png",
      imageExpSrc: "/images/people/bidyut_color.png",
      name: "Bidyut",
      width: 200,
      height: 200,
    },
    {
      id: 5,
      imageSrc: "/images/people/ujjawal.png",
      imageExpSrc: "/images/people/ujjawal_color.png",
      name: "Ujjawal",
      width: 200,
      height: 200,
    },
    {
      id: 6,
      imageSrc: "/images/people/priya.png",
      imageExpSrc: "/images/people/priya_color.png",
      name: "Priya",
      width: 200,
      height: 200,
    },
  ];

  const vipData = [
    { imageSrc: "/images/people/ayush.png", width: 334, height: 330 },
    { imageSrc: "/images/people/raja.png", width: 330, height: 473 },
    { imageSrc: "/images/people/monika.png", width: 331, height: 330 },
    { imageSrc: "/images/people/ujjawal_lg.png", width: 330, height: 473 },
    { imageSrc: "/images/people/suhani_lg.png", width: 330, height: 473 },
    { imageSrc: "/images/people/bhupendra.png", width: 330, height: 330 },
    { imageSrc: "/images/people/sneha.png", width: 330, height: 473 },
    { imageSrc: "/images/people/kushagra.png", width: 330, height: 330 },
    { imageSrc: "/images/people/saurabh.png", width: 330, height: 473 },
    { imageSrc: "/images/people/someone.png", width: 330, height: 473 },
    { imageSrc: "/images/people/anupriya.png", width: 330, height: 330 },
    { imageSrc: "/images/people/someone_2.png", width: 330, height: 473 },
  ];

  // Calculate the number of columns
  const numColumns = 4; // Change this value as needed

  // Group data by column
  const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
    vipData.filter((_, index) => index % numColumns === columnIndex)
  );

  return (
    <section className="relative px-4 w-full min-h-screen flex">
      {legend ? (
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[35%] flex flex-col md:flex-row gap-2 order-2 md:order-1">
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
          <div className="w-full md:w-[63%] md:min-h-screen flex items-center gap-2 order-1 md:order-2">
            {legendexp ? (
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className={`${bungee.className} text-8xl text-white`}>
                    Our
                  </h1>
                  <h1 className={`${bungee.className} text-8xl text-white`}>
                    Legend
                  </h1>
                </div>
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
        <>
          <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-2">
                {column.map((data, rowIndex) => (
                  <Image
                    key={rowIndex}
                    width={data.width}
                    height={data.height}
                    className="w-full h-auto object-cover"
                    src={data.imageSrc}
                    alt="Image Description"
                  />
                ))}
              </div>
            ))}
          </div>
        </>
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
    </section>
  );
};

export default Legends;
