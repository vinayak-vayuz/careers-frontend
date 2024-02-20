import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Bungee, Montserrat } from "next/font/google";
import { data } from "autoprefixer";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Legends = () => {
  const [legend, setLegend] = useState(true);
  const [initialLegendShown, setInitialLegendShown] = useState(false);
  const [legendDataToShow, setLegendDataToShow] = useState([]);
  const [legendexp, setLegendexp] = useState(true);
  const [id, setId] = useState(0);

  const handleLegend = () => {
    setLegend(!legend);
    setInitialLegendShown(false);
  };

  const handleLegendexp = (id) => {
    setId(id);
    // setLegendexp(!legendexp);
    setInitialLegendShown(true);
    setLegendDataToShow(legendData.filter((data) => data.id === id));
  };

  const legendData = [
    {
      id: 1,
      name: "Monika Singh",
      designation: "Digital Marketer",
      department: "100x",
      title: "",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut diam. Adipiscing placerat sit morbi fusce. Eget dictum et aliquam sed non tellus augue. Cursus egestas et ipsum id venenatis. Nibh hendrerit gravida sit fringilla sollicitudin lacus. Sit volutpat egestas et nullam porttitor imperdiet nisi aliquam. Ac tincidunt ultricies sed integer pellentesque massa phasellus. At est congue bibendum purus neque. Vitae pulvinar integer consectetur in pretium. Eu orci in donec viverra nisi a sem blandit semper.",
      imageSrc: "/images/people/monika.png",
      imageExpSrc: "/images/people/monika_color.png",
      width: 200,
      height: 200,
    },
    {
      id: 2,
      name: "Suhani singh",
      designation: "HR",
      department: "Human Resources",
      title: "",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut diam. Adipiscing placerat sit morbi fusce. Eget dictum et aliquam sed non tellus augue. Cursus egestas et ipsum id venenatis. Nibh hendrerit gravida sit fringilla sollicitudin lacus. Sit volutpat egestas et nullam porttitor imperdiet nisi aliquam. Ac tincidunt ultricies sed integer pellentesque massa phasellus. At est congue bibendum purus neque. Vitae pulvinar integer consectetur in pretium. Eu orci in donec viverra nisi a sem blandit semper.",
      imageSrc: "/images/people/suhani.png",
      imageExpSrc: "/images/people/suhani_color.png ",
      width: 200,
      height: 200,
    },
    {
      id: 3,
      name: "Saurabh Bhatt",
      designation: "Product Engineer",
      department: "Team Node",
      title: "",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut diam. Adipiscing placerat sit morbi fusce. Eget dictum et aliquam sed non tellus augue. Cursus egestas et ipsum id venenatis. Nibh hendrerit gravida sit fringilla sollicitudin lacus. Sit volutpat egestas et nullam porttitor imperdiet nisi aliquam. Ac tincidunt ultricies sed integer pellentesque massa phasellus. At est congue bibendum purus neque. Vitae pulvinar integer consectetur in pretium. Eu orci in donec viverra nisi a sem blandit semper.",
      imageSrc: "/images/people/saurabh.png",
      imageExpSrc: "/images/people/saurabh_color.png",
      width: 200,
      height: 200,
    },
    {
      id: 4,
      name: "Bidyut Majumdar",
      designation: "Product Engineer",
      department: "ArKa",
      title: "Legend: Created 140 page in 5 days",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut diam. Adipiscing placerat sit morbi fusce. Eget dictum et aliquam sed non tellus augue. Cursus egestas et ipsum id venenatis. Nibh hendrerit gravida sit fringilla sollicitudin lacus. Sit volutpat egestas et nullam porttitor imperdiet nisi aliquam. Ac tincidunt ultricies sed integer pellentesque massa phasellus. At est congue bibendum purus neque. Vitae pulvinar integer consectetur in pretium. Eu orci in donec viverra nisi a sem blandit semper.",
      imageSrc: "/images/people/bidyut.png",
      imageExpSrc: "/images/people/bidyut_color.png",
      width: 200,
      height: 200,
    },
    {
      id: 5,
      name: "Ujjawal Sharma",
      designation: "Product Engineer",
      department: "Mobile Team",
      title: "",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut diam. Adipiscing placerat sit morbi fusce. Eget dictum et aliquam sed non tellus augue. Cursus egestas et ipsum id venenatis. Nibh hendrerit gravida sit fringilla sollicitudin lacus. Sit volutpat egestas et nullam porttitor imperdiet nisi aliquam. Ac tincidunt ultricies sed integer pellentesque massa phasellus. At est congue bibendum purus neque. Vitae pulvinar integer consectetur in pretium. Eu orci in donec viverra nisi a sem blandit semper.",
      imageSrc: "/images/people/ujjawal.png",
      imageExpSrc: "/images/people/ujjawal_color.png",
      width: 200,
      height: 200,
    },
    {
      id: 6,
      name: "Priya Pal",
      designation: "HR",
      department: "Human Resources",
      title: "",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut diam. Adipiscing placerat sit morbi fusce. Eget dictum et aliquam sed non tellus augue. Cursus egestas et ipsum id venenatis. Nibh hendrerit gravida sit fringilla sollicitudin lacus. Sit volutpat egestas et nullam porttitor imperdiet nisi aliquam. Ac tincidunt ultricies sed integer pellentesque massa phasellus. At est congue bibendum purus neque. Vitae pulvinar integer consectetur in pretium. Eu orci in donec viverra nisi a sem blandit semper.",
      imageSrc: "/images/people/priya.png",
      imageExpSrc: "/images/people/priya_color.png",
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

  // useEffect(() => {
  //   // if (!legendexp) {
  //   setLegendDataToShow(legendData.filter((data) => data.id === id));
  //   // }
  // }, [legendexp, id, legendData]);

  // Calculate the number of columns
  const numColumns = 4; // Change this value as needed

  // Group data by column
  const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
    vipData.filter((_, index) => index % numColumns === columnIndex)
  );

  return (
    <motion.section
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative px-4 py-4 w-full min-h-screen bg-[#141414] flex"
    >
      {legend ? (
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[35%] flex flex-col md:flex-row gap-2 order-2 md:order-1">
            <div className="flex flex-wrap gap-2">
              {legendData.map((data, index) => (
                <motion.div
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  key={index}
                  className="overflow-hidden"
                >
                  <Image
                    className="object-contain"
                    onClick={() => handleLegendexp(data.id)}
                    width={200}
                    height={200}
                    src={id === data.id ? data.imageExpSrc : data.imageSrc}
                    alt=""
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[63%] md:min-h-screen flex items-center gap-2 order-1 md:order-2">
            {id == 0 ? (
              <div className="flex flex-col gap-4">
                {!initialLegendShown && (
                  <>
                    <div>
                      <h1 className={`${bungee.className} text-8xl text-white`}>
                        Our
                      </h1>
                      <h1 className={`${bungee.className} text-8xl text-white`}>
                        Legend
                      </h1>
                    </div>
                    <p className="text-lg text-[#DDDDDD]">
                      Legends are born when ordinary individuals go beyond the
                      call of duty, creating benchmarks of excellence that
                      inspire the world to reach new heights
                    </p>
                  </>
                )}
              </div>
            ) : (
              <>
                {legendData
                  .filter((data) => data.id === id)
                  .map((data, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <h1 className={`${bungee.className} text-white text-6xl`}>
                        {data.name}
                      </h1>
                      <div
                        className={`${montserrat.className} flex items-center gap-1 text-[#ADADAD]`}
                      >
                        <h2>{data.designation + ","}</h2>
                        <h3>{data.department}</h3>
                      </div>
                      <h4
                        className={`${montserrat.className} font-semibold text-[#00C2F8]`}
                      >
                        {data.title}
                      </h4>
                      <p className={`${montserrat.className} text-[#DDDDDD]`}>
                        {data.description}
                      </p>
                    </div>
                  ))}
              </>
            )}
          </div>
          <Image
            className="w-32 absolute bottom-0 right-0"
            src={"/icons/proud_vayuzer.svg"}
            width={199}
            height={200}
            alt=""
          />
        </div>
      ) : (
        <>
          <div className="w-full lg:h-[58rem] lg:overflow-hidden py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-2">
                {column.map((data, rowIndex) => (
                  <Image
                    key={rowIndex}
                    width={data.width}
                    height={data.height}
                    className="w-full h-auto object-cover"
                    src={data.imageSrc}
                    alt=""
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
          <Image
            src={"/images/vip_button.svg"}
            width={27}
            height={484}
            alt=""
          />
        </button>
      ) : (
        <button
          onClick={handleLegend}
          className="absolute top-1/2 -translate-y-1/2 left-0"
        >
          <Image
            src={"/images/back_button.svg"}
            width={27}
            height={331}
            alt=""
          />
        </button>
      )}
    </motion.section>
  );
};

export default Legends;
