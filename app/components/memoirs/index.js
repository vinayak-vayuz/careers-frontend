import Image from "next/image";
import { useState } from "react";
import GradientButton from "../buttons/GradientButton";
import AnimatedButton from "../buttons/AnimatedButton";

const buttons = [
  "Convergence",
  "Birthday matinee",
  "Saturday Events",
  "Holi",
  "Diwali",
  "Christmas",
];

const convergenceImages = [
  {
    imageSrc: "/images/convergence/convergence_1.png",
    className: "w-full sm:w-44 md:absolute top-20 left-5",
    width: "425",
    height: "282",
    alt: "tejandkush",
  },
  {
    imageSrc: "/images/convergence/convergence_2.png",
    className: "w-full sm:w-32 md:absolute left-10 bottom-14",
    width: "425",
    height: "282",
    alt: "manoj",
  },
  {
    imageSrc: "/images/convergence/convergence_3.png",
    className: "w-full sm:w-56 md:absolute bottom-0 left-[50%]",
    width: "406",
    height: "407",
    alt: "gaurav",
  },
  {
    imageSrc: "/images/convergence/convergence_4.png",
    className: "w-full sm:w-20 md:absolute bottom-[20%] right-0",
    width: "136",
    height: "173",
    alt: "mehul",
  },
  {
    imageSrc: "/images/convergence/convergence_5.png",
    className: "w-full sm:w-28 md:absolute top-[55%] right-52",
    width: "425",
    height: "282",
    alt: "vinayak",
  },
  {
    imageSrc: "/images/convergence/convergence_6.png",
    className:
      "hidden sm:block w-full sm:w-32 md:absolute top-1/2 -translate-y-1/2 left-[40%]",
    width: "425",
    height: "282",
    alt: "saurabh",
  },
  {
    imageSrc: "/images/convergence/convergence_7.png",
    className: "w-full sm:w-20 md:absolute top-[50%] left-32",
    width: "425",
    height: "282",
    alt: "ankit",
  },
  {
    imageSrc: "/images/convergence/convergence_8.png",
    className: "w-full sm:w-56 md:absolute top-20 right-0 md:right-44",
    width: "425",
    height: "282",
    alt: "priya",
  },
];
const Memoirs = () => {
  const [id, setId] = useState(0);
  const [select, setSelect] = useState(false);

  

  const handleClick = (index) => {
    setId(index);
    setSelect(!select);
    console.log(id)
  };

  // Calculate the number of columns
  const numColumns = 4; // Change this value as needed

  // Group data by column
  const columns = Array.from({ length: numColumns }, (_, columnIndex) =>
    convergenceImages.filter((_, index) => index % numColumns === columnIndex)
  );

  return (
    <section className="pb-10 bg-[#141414] relative px-2 md:px-6 w-full md:min-h-screen overflow-hidden">
      <div className="py-4 flex flex-nowrap gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {buttons.map((data, index) => (
          <AnimatedButton
            key={index}
            onClick={() => handleClick(index)}
            selected={id === index && true}
            className={`${id === index ? "running" : ""}`}
          >
            {data}
          </AnimatedButton>
          // <GradientButton
          //   containerClassName={`${
          //     id === index
          //       ? "bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A]"
          //       : ""
          //   }`}
          //   buttonClassName={`${
          //     id === index
          //       ? "bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A]"
          //       : ""
          //   } whitespace-nowrap`}
          //   onclick={() => handleClick(index)}
          //   key={index}
          // >
          //   {data}
          // </GradientButton>
        ))}
      </div>
      <div className="w-full lg:h-[35rem] lg:overflow-hidden py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
      {/* <div className="flex flex-nowrap overflow-x-auto gap-2 no-scrollbar">
        {convergenceImages.map((data, index) => (
          <Image
            key={index}
            className={`${data.className} object-cover md:rounded-full sm:aspect-[1] grayscale hover:grayscale-0 hover:scale-105 md:hover:scale-150 transition-all duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out`}
            src={data.imageSrc}
            width={data.width}
            height={data.height}
            alt={data.alt}
          />
        ))}
      </div> */}
    </section>
  );
};

export default Memoirs;
