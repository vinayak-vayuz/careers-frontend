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
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-3 gap-12 w-[60rem] sm:w-[80rem] lg:w-[50rem] h-[55rem] md:h-[90rem] lg:h-[75rem] overflow-hidden origin-[50%_0%]">
        <div className="grid gap-9 w-full h-[440px] animation-sliding-img-up-1">
          {socialData.map((data, index) => (
            <Image
              key={index}
              className="w-full object-cover shadow-lg rounded-lg"
              src={data.imageSrc}
              width={data.width}
              height={data.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
