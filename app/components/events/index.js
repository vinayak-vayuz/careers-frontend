import Image from "next/image";
import { motion } from "framer-motion";
import { Bungee } from "next/font/google";
import { eventsData } from "./eventsData";
import { useState, useEffect, useRef } from "react";
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
  const [lastPos, setLastPos] = useState(0);
  const perspective = 300;
  const zSpacing = -11800;
  const numFrames = 1;

  const zVals = Array.from(
    { length: numFrames },
    (_, i) => (numFrames - i) * zSpacing
  );
  const nullRef = useRef(null);
  const frames = Array.from({ length: numFrames }, () => nullRef);
  const scrollMsgRef = useRef(null);

  const handleScroll = () => {
    const top = window.scrollY || document.documentElement.scrollTop;
    const delta = lastPos - top;
    setLastPos(top);

    zVals.forEach((zVal, i) => {
      const newZVal = zVal + delta * -1.5;
      const frame = frames[i].current;
      const transform = `translateZ(${newZVal}px)`;
      const opacity =
        newZVal < 200
          ? 1
          : 1 - parseInt(((newZVal - 200) / (perspective - 200)) * 10) / 10;
      const display = newZVal > perspective ? "none" : "block";

      frame.style.transform = transform;
      frame.style.opacity = opacity;
      frame.style.display = display;

      if (zVals[numFrames - 1] > 200 && scrollMsgRef.current) {
        scrollMsgRef.current.style.display = "none";
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hidden md:block body-content">
        <div id="content">
          <div id="viewport">
            {frames.map((frame, index) => (
              <div
                key={index}
                className={`frame ${index % 2 === 0 ? "box" : "text"}`}
                style={{ transform: `translateZ(${zVals[index]}px)` }}
                ref={frame}
              >
                {eventsData.map((data, index) => (
                  <Expand
                    key={index}
                    className={`${data.className} w-52`}
                    imageSrc={data.imageSrc}
                    width={data.width}
                    height={data.height}
                    alt={data.alt}
                    title={data.title}
                    description={data.description}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <motion.section
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex md:hidden bg-[#141414] px-4 py-10 relative w-full min-h-auto md:min-h-screen flex-nowrap justify-center items-center gap-2 overflow-x-auto no-scrollbar"
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
