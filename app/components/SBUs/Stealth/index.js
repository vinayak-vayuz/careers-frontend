import Image from "next/image";
import { Cherry_Bomb_One } from "next/font/google";

const cherry_Bomb_One = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});

const Stealth = () => {
  return (
    <div
      id="Stealth"
      className="relative flex flex-col justify-between items-center gap-10"
    >
      <Image src={"/images/black_bg.svg"} width={334} height={702} alt="" />
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
        src={"/images/stealth.svg"}
        width={287}
        height={197}
        alt=""
      />
      <p className="block sm:hidden text-[#DDDDDD]">
        In Stealth, we silently architect organizational evolution, dedicating
        our SBU to strategic planning, fostering growth through unseen pathways,
        and crafting precise futures.
      </p>
    </div>
  );
};

export default Stealth;
