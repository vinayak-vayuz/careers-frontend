import Image from "next/image";

const buttons = [
  { id: 1, imageSrc: "/icons/v.svg", width: "24", height: "25" },
  { id: 2, imageSrc: "/icons/a.svg", width: "24", height: "25" },
  { id: 3, imageSrc: "/icons/y.svg", width: "24", height: "25" },
  { id: 4, imageSrc: "/icons/u.svg", width: "19", height: "25" },
  { id: 5, imageSrc: "/icons/z.svg", width: "24", height: "25" },
];

const VerticalLogoButton = ({
  onclick,
  containerClassName,
  buttonClassName,
}) => {
  return (
    <div
      className={`${containerClassName} fixed top-[50%] -translate-y-[50%] left-4 flex flex-col items-center gap-5 z-50`}
    >
      {buttons.map((data, index) => (
        <button onClick={onclick} className={`${buttonClassName}`}>
          <Image
            key={index}
            className={`${data.className} opacity-20 hover:opacity-100`}
            src={data.imageSrc}
            width={data.width}
            height={data.height}
            alt=""
          />
        </button>
      ))}
    </div>
  );
};

export default VerticalLogoButton;
