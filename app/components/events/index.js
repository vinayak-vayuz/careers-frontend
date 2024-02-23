import Image from "next/image";
import { useRef, useState } from "react";
import { Bungee } from "next/font/google";
import { motion } from "framer-motion";
import { eventsData } from "./eventsData";
import { useOutsideClick } from "@/app/functions/outsideClick";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const Expand = ({
  className,
  imageSrc,
  eImageSrc,
  width,
  height,
  alt,
  title,
  description,
}) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  // Handling outside click events
  const menuRef = useRef(null);
  const closeMenu = () => {
    setSelected(false);
  };
  useOutsideClick(menuRef, closeMenu);

  // const spring = {
  //   type: "spring",
  //   damping: 10,
  //   stiffness: 100,
  // };

  return (
    <>
      <div ref={menuRef} onClick={handleClick}>
        <Image
          className={`${className} w-52`}
          src={imageSrc}
          width={width}
          height={height}
          alt={alt}
        />
        {selected ? (
          <div
            // layout
            // transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-4 bg-black rounded-xl"
          >
            <h1 className={`${bungee.className} text-2xl text-[#A35DFF]`}>
              {title}
            </h1>
            <h1 className="text-white">{description}</h1>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const Events = () => {
  return (
    <>
      <motion.section
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-[#141414] px-4 py-10 relative w-full flex flex-nowrap justify-center items-center gap-2 overflow-x-auto no-scrollbar"
      >
        {eventsData.map((data, index) => (
          <Expand
            key={index}
            className={`${data.className} min-w-[200px] flex-shrink-0 w-52`}
            imageSrc={data.imageSrc}
            width={data.width}
            height={data.height}
            alt={data.alt}
            title={data.title}
            description={data.description}
          />
        ))}
      </motion.section>
    </>
  );
};

export default Events;
