import Image from "next/image";

const buttons = [
  { id: 1, imageSrc: "/icons/lifeatvayuz.svg", width: "24", height: "24" },
  { id: 2, imageSrc: "/icons/bag.svg", width: "24", height: "25" },
  { id: 3, imageSrc: "/icons/user.svg", width: "24", height: "25" },
];

const BottomNavigation = ({ onClick, containerClassName, buttonClassName }) => {
  return (
    <div
      className={`${containerClassName}sm:hidden fixed bottom-8 left-1/2 -translate-x-1/2 w-fit px-4 sm:px-10 py-4 flex justify-between items-center gap-10 bg-[#1F1F1F] border border-[#535353] rounded-full z-50`}
    >
      {buttons.map((data) => (
        <button
          key={data.id}
          onClick={onClick}
          className={`${buttonClassName}`}
        >
          <Image
            key={data.id}
            className={`${data.className}`}
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

export default BottomNavigation;
