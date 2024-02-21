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

const RapidExchange = () => {
  return (
    <div
      id="RapidExchange"
      className="relative flex flex-col justify-between items-center gap-10"
    >
      <Image src={"/images/green_bg.svg"} width={334} height={702} alt="" />
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
        src={"/images/rapid.svg"}
        width={496}
        height={228}
        alt=""
      />
      <p className="block md:hidden text-[#DDDDDD]">
        Welcome to Rapid Exchange, our strategic business unit connecting
        clients with top-tier talent, fostering growth through skilled and
        dedicated professionals.
      </p>
    </div>
  );
};

export default RapidExchange;
