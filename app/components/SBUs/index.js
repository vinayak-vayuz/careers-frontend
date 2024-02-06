import Image from "next/image";
import { Bungee, Cherry_Bomb_One } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});
const cherry_Bomb_One = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
});

const PEG = ({ className }) => {
  const leftSectionRef = useRef(null);
  const [isLeftSticky, setLeftSticky] = useState(false);

  const handleScroll = () => {
    if (leftSectionRef.current) {
      const offsetTop = leftSectionRef.current.offsetTop;
      const isSticky = window.scrollY >= offsetTop;
      setLeftSticky(isSticky);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="relative px-2 md:px-14 py-8 w-full min-h-screen flex justify-between items-center gap-20">
        <div
          ref={leftSectionRef}
          className={`${className} w-full md:w-1/2 min-h-[80vh] flex flex-col justify-between gap-5 ${
            isLeftSticky ? "sticky top-0" : ""
          }`}
        >
          <div>
            <div>
              <h1 className={`${bungee.className} text-8xl text-white`}>Our</h1>
              <h1 className={`${bungee.className} text-8xl text-white`}>
                SBUs
              </h1>
            </div>
            <p className="text-[#DDDDDD]">
              Empowering Futures, Unleashing Potential: Our SBUs - Pillars of
              Excellence in Every Endeavor.
            </p>
          </div>
          <div className="relative flex sm:hidden flex-col justify-between items-center gap-10">
            <Image src={"/images/teal_bg.svg"} width={334} height={702} />
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
            <Image
              src={"/images/pink_circle.svg"}
              width={334}
              height={702}
              alt=""
            />
          </div>
          <p className="text-[#DDDDDD]">
            The Product Engineering Group pioneers technological innovation,
            crafting market-leading solutions through creativity, precision, and
            a commitment to excellence. Join our transformative journey.
          </p>
        </div>
        <div className="hidden sm:flex justify-end items-center w-full md:w-1/2 min-h-[80vh]">
          <div className="relative flex flex-col justify-between items-center gap-10">
            <Image src={"/images/teal_bg.svg"} width={334} height={702} />
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
            <Image
              src={"/images/pink_circle.svg"}
              width={334}
              height={702}
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default PEG;
