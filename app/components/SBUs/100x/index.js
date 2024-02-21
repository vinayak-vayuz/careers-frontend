import Image from "next/image";
import { Bungee, Cherry_Bomb_One } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});
const cherry_Bomb_One = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});

const HundredX = () => {
  return (
    <div
      id="HundredX"
      className="relative flex flex-col justify-between items-center gap-10"
    >
      <Image src={"/images/sky_bg.svg"} width={334} height={702} alt="" />
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
        src={"/images/100x.svg"}
        width={387}
        height={197}
        alt=""
      />
      <p className="block sm:hidden text-[#DDDDDD]">
        Meet 100 X, a cutting-edge marketing team driving success through
        creativity, strategy, and groundbreaking campaigns that leave a lasting
        impact.
      </p>
    </div>
  );
};

export default HundredX;
