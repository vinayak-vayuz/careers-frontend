import Image from "next/image";
import GradientButton from "../buttons/GradientButton";

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
    className: "w-44 absolute top-20 left-5",
    width: "425",
    height: "282",
    alt: "tejandkush",
  },
  {
    imageSrc: "/images/convergence/convergence_2.png",
    className: "w-32 absolute left-10 bottom-14",
    width: "425",
    height: "282",
    alt: "manoj",
  },
  {
    imageSrc: "/images/convergence/convergence_3.png",
    className: "w-56 absolute bottom-0 left-[50%]",
    width: "406",
    height: "407",
    alt: "gaurav",
  },
  {
    imageSrc: "/images/convergence/convergence_4.png",
    className: "w-20 absolute bottom-[20%] right-0",
    width: "136",
    height: "173",
    alt: "mehul",
  },
  {
    imageSrc: "/images/convergence/convergence_5.png",
    className: "w-28 absolute top-[55%] right-52",
    width: "425",
    height: "282",
    alt: "vinayak",
  },
  {
    imageSrc: "/images/convergence/convergence_6.png",
    className: "w-32 absolute top-1/2 -translate-y-1/2 left-[40%]",
    width: "425",
    height: "282",
    alt: "saurabh",
  },
  {
    imageSrc: "/images/convergence/convergence_7.png",
    className: "w-20 absolute top-[50%] left-32",
    width: "425",
    height: "282",
    alt: "ankit",
  },
  {
    imageSrc: "/images/convergence/convergence_8.png",
    className: "w-56 absolute top-20 right-44",
    width: "425",
    height: "282",
    alt: "priya",
  },
];
const Memoirs = () => {
  return (
    <div className="relative p-6 w-full min-h-screen">
      <div className="flex flex-wrap gap-2">
        {buttons.map((data, index) => (
          <GradientButton key={index}>{data}</GradientButton>
        ))}
      </div>
      {convergenceImages.map((data, index) => (
 
          <Image
            key={index}
            className={`${data.className} rounded-full grayscale hover:grayscale-0 hover:scale-150 transition-all duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out`}
            src={data.imageSrc}
            width={data.width}
            height={data.height}
            alt={data.alt}
          />
        
      ))}
    </div>
  );
};

export default Memoirs;
