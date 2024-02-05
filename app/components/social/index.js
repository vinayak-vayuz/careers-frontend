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
    <section className="w-full min-h-screen">
      <div className="">
        <div className="flex flex-wrap">
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
    </section>
  );
};

export default Social;
