import { Mochiy_Pop_One, Modak } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
});
const mochiy_pop_one = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
});

const socialData = [
  {
    imageSrc: "/images/social/social_1.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_2.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_3.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_4.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_5.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_6.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_7.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_8.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_9.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_10.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_11.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_12.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_13.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_14.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_15.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_16.png",
    className: "",
    width: 332,
    height: 200,
  },
  {
    imageSrc: "/images/social/social_17.png",
    className: "",
    width: 332,
    height: 200,
  },
];

const Social = () => {
  const [topcontributors, setTopcontributors] = useState(false);

  function handleClick() {
    setTopcontributors(!topcontributors);
  }

  return (
    <>
      <section className="w-full min-h-screen relative">
        {!topcontributors ? (
          <div
            className="w-full h-[20rem] sm:h-[30rem] lg:h-[35rem] overflow-hidden"
            style={{ perspective: 700 }}
          >
            <div
              className="grid grid-cols-3 gap-12 w-[60rem] sm:w-[80rem] lg:w-[50rem] h-[55rem] md:h-[90rem] lg:h-[75rem] overflow-hidden origin-[50%_0%]"
              style={{
                transform:
                  "translate3d(7%, -2%, 0px) scale3d(0.9, 0.8, 1) rotateX(15deg) rotateY(-9deg) rotateZ(32deg)",
              }}
            >
              <div className="grid gap-9 w-full h-[440px] animation-sliding-img-up-1">
                {socialData.map((data, index) => (
                  <Image
                    key={index}
                    className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] "
                    src={data.imageSrc}
                    width={data.width}
                    height={data.height}
                  />
                ))}
              </div>
              <div className="grid gap-9 w-full h-[440px] animation-sliding-img-down-1">
                {socialData.map((data, index) => (
                  <Image
                    key={index}
                    className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] "
                    src={data.imageSrc}
                    width={data.width}
                    height={data.height}
                  />
                ))}
              </div>
              <div className="grid gap-9 w-full h-[440px] animation-sliding-img-up-2">
                {socialData.map((data, index) => (
                  <Image
                    key={index}
                    className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] "
                    src={data.imageSrc}
                    width={data.width}
                    height={data.height}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className={`ml-4 relative w-full min-h-screen bg-[url('/images/social/sky_circle.png')] bg-cover bg-no-repeat`}
            >
              <h1
                className={`${modak.className} absolute top-4 left-60 text-4xl text-white text-right`}
              >
                Top social <br /> Contributors
              </h1>
              <Image
                className="absolute top-[60%] -translate-y-1/2 left-[20%]"
                src={"/images/people/vinayak&saurabh.png"}
                width={205}
                height={496}
              />
              <div
                className={`${mochiy_pop_one.className} absolute top-[60%] -translate-y-1/2 right-[5%] w-[50%] min-h-[10rem] px-5 py-3 bg-[#1C1C1C] rounded-3xl`}
              >
                <h1 className="text-white pb-2 border-b">Top Contributors</h1>
                <div className="flex">
                  <Image
                    className="rounded-full"
                    src={"/images/people/saurabh.png"}
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <button onClick={handleClick} className="absolute bottom-0 right-0">
          <Image
            src={"/images/social/top_social_button.png"}
            width={205}
            height={496}
          />
        </button>
      </section>
      {/* <section className="w-full min-h-screen">
        <div className="">
          <div className="w-full flex flex-wrap">
            {socialData.map((data, index) => (
              <Image
                key={index}
                className="shadow-lg rounded-lg"
                src={data.imageSrc}
                width={data.width}
                height={data.height}
              />
            ))}
          </div>
        </div>
        <button>
          <Image
            className="absolute bottom-0 right-0"
            src={"/images/social/top_social_button.png"}
            width={205}
            height={496}
          />
        </button>
      </section> */}
    </>
  );
};

export default Social;
