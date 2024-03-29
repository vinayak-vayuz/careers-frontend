import { Cherry_Bomb_One } from "next/font/google";
import Image from "next/image";

const cherry_Bomb_One = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});
const PEG = () => {
  return (
    <>
      <div
        id="PEG"
        className="relative flex flex-col justify-between items-center gap-4"
      >
        <Image src={"/images/teal_bg.svg"} width={334} height={702} alt="" />
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
        <p className="block md:hidden text-[#DDDDDD]">
          The Product Engineering Group pioneers technological innovation,
          crafting market-leading solutions through creativity, precision, and a
          commitment to excellence. Join our transformative journey.
        </p>
      </div>
    </>
  );
};

export default PEG;
