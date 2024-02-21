import Image from "next/image";
import { useRef, useState } from "react";
import { Bungee } from "next/font/google";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/app/functions/outsideClick";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const eventsData = [
  {
    title: "Flutter Nest",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/flutter_nest.png",
    className: "hidden sm:block absolute top-0 left-0",
    width: 332,
    height: 174,
  },
  {
    title: "Birthday Matinee",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/birthday_matinee.png",
    className: "absolute top-[10%] left-[10%] sm:left-[25%]",
    width: 287,
    height: 231,
  },
  {
    title: "Event 01",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/blank_event_01.png",
    className: "absolute top-[10%] left-[60%] scale-50",
    width: 144,
    height: 117,
  },
  {
    title: "Demo Saturday",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/demo_saturday.png",
    className: "hidden sm:block absolute top-[2%] right-[0%]",
    width: 337,
    height: 294,
  },
  {
    title: "Building a Horcrux",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/horcrux.png",
    eImageSrc: "/images/events/horcrux_lg.png",
    className: "absolute top-[40%] left-[10%]",
    width: 396,
    height: 320,
  },
  {
    title: "Drishtikone",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/drishtikone.png",
    className: "absolute top-[40%] -right-[20%] sm:right-[20%]",
    width: 330,
    height: 330,
  },
  {
    title: "Event 02",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/blank_event_02.png",
    className: "absolute bottom-[0%] left-[0%] w-24",
    width: 221,
    height: 185,
  },
  {
    title: "Event 03",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/blank_event_03.png",
    className: "hidden sm:block absolute bottom-[0%] right-[50%] w-32",
    width: 224,
    height: 183,
  },
  {
    title: "Developer Meet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus mattis netus pretium bibendum lectus. Ultricies eu.",
    imageSrc: "/images/events/developer_meet.png",
    className: "absolute bottom-[0%] right-[2%]",
    width: 206,
    height: 165,
  },
];

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

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <>
      <section
        className="w-full flex flex-col justify-center items-center"
        ref={menuRef}
        onClick={handleClick}
      >
        <Image
          className={`${className} w-52`}
          src={imageSrc}
          width={width}
          height={height}
          alt={alt}
        />
        {selected ? (
          <motion.div
            layout
            transition={{ duration: 1 }}
            className="w-max p-4 bg-black bg-opacity-100 rounded-xl"
          >
            <h1 className={`${bungee.className} text-2xl text-[#A35DFF]`}>
              {title}
            </h1>
            <h1 className="text-white">{description}</h1>
          </motion.div>
        ) : (
          <></>
        )}
      </section>
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
        className="bg-[#141414] px-4 py-10 relative w-full min-h-screen flex overflow-hidden"
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
      </motion.section>
    </>
  );
};

export default Events;
