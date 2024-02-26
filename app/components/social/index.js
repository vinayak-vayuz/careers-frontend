import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mochiy_Pop_One, Modak } from "next/font/google";
import { useOutsideClick } from "@/app/functions/outsideClick";

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

const topContributors = [
  {
    imageSrc: "/images/people/ayush.png",
    name: "Ayush",
    score: 7562,
    width: 334,
    height: 330,
  },
  {
    imageSrc: "/images/people/raja.png",
    name: "Raja",
    score: 4123,
    width: 330,
    height: 473,
  },
  {
    imageSrc: "/images/people/monika.png",
    name: "Monika",
    score: 1250,
    width: 331,
    height: 330,
  },
  {
    imageSrc: "/images/people/ujjawal_lg.png",
    name: "Ujjawal",
    score: 1000,
    width: 330,
    height: 473,
  },
  {
    imageSrc: "/images/people/suhani_lg.png",
    name: "Suhani",
    score: 750,
    width: 330,
    height: 473,
  },
  {
    imageSrc: "/images/people/bhupendra.png",
    name: "Bhupendra",
    score: 750,
    width: 330,
    height: 330,
  },
  {
    imageSrc: "/images/people/sneha.png",
    name: "Sneha",
    score: 750,
    width: 330,
    height: 473,
  },
  {
    imageSrc: "/images/people/kushagra.png",
    name: "Kushagra",
    score: 560,
    width: 330,
    height: 330,
  },
  {
    imageSrc: "/images/people/saurabh.png",
    name: "Saurabh",
    score: 560,
    width: 330,
    height: 473,
  },
  {
    imageSrc: "/images/people/someone.png",
    name: "Alex",
    score: 750,
    width: 330,
    height: 473,
  },
  {
    imageSrc: "/images/people/anupriya.png",
    name: "Anupriya",
    score: 750,
    width: 330,
    height: 330,
  },
  {
    imageSrc: "/images/people/someone_2.png",
    name: "John",
    score: 750,
    width: 330,
    height: 473,
  },
];

const Social = ({ id }) => {
  const [topcontributors, setTopcontributors] = useState(false);

  function handleClick() {
    setTopcontributors(!topcontributors);
  }

  // Handling outside click events
  const menuRef = useRef(null);
  const closeMenu = () => {
    setTopcontributors(!topcontributors);
  };
  useOutsideClick(menuRef, closeMenu);

  return (
    <>
      <motion.section
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        id={id}
        className="w-full py-4 md:min-h-screen bg-[#141414] relative"
      >
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
                    alt=""
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
                    alt=""
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
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              ref={menuRef}
              className={`sm:ml-4 py-4 relative w-full min-h-screen flex flex-col gap-10 items-center bg-[url('/images/social/sky_circle_mobile.svg')] md:bg-[url('/images/social/sky_circle.png')] bg-cover bg-no-repeat`}
            >
              <h1
                className={`${modak.className} text-4xl text-white text-right`}
              >
                Top social <br /> Contributors
              </h1>
              <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
                <Image
                  src={"/images/people/vinayak&saurabh.png"}
                  width={205}
                  height={496}
                  alt=""
                />
                <div
                  className={`${mochiy_pop_one.className} w-[90%] sm:w-[30%] bg-[#1C1C1C] rounded-3xl`}
                >
                  <div className="px-5 py-3">
                    <h1 className="text-white px-4 pb-2 border-b">
                      Top Contributors
                    </h1>
                    {topContributors.slice(0, 5).map((data, index) => (
                      <div
                        key={index}
                        className="py-2 flex justify-between items-center gap-4 border-b"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            className="w-10 h-10 rounded-full"
                            src={data.imageSrc}
                            width={45}
                            height={45}
                            alt=""
                          />
                          <h1 className="text-white">{data.name}</h1>
                        </div>
                        <p className="text-[#0AD80A]">{data.score}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!topcontributors ? (
          <button
            onClick={handleClick}
            className="w-24 sm:w-auto absolute bottom-0 right-0"
          >
            <Image
              src={"/images/social/top_social_button.png"}
              width={205}
              height={496}
              alt=""
            />
          </button>
        ) : (
          <></>
        )}
      </motion.section>
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
