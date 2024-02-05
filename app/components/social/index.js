import Image from "next/image";

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
  return (
    <>
      <section className="w-full min-h-screen relative">
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
        <button className="absolute bottom-0 right-0">
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
