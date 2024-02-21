import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "700",
  subsets: ["latin"],
});

const JobCard = ({
  title,
  company,
  logo,
  location,
  salary,
  city,
  experience,
  applicants,
  views,
  postedAt,
}) => {
  return (
    // w-[20rem]
    <div
      className={`${nunito.className} w-full p-3 bg-[#202020] border border-[#313131] rounded-2xl flex flex-col justify-between`}
    >
      <div className="flex flex-col">
        <div className="relative flex gap-4">
          <div className="p-2 w-16 h-16 bg-[#424242] flex justify-center items-center rounded-2xl">
            <Image
              width={42}
              height={20}
              src={logo ? logo : "/icons/y.svg"}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg text-[#F2F2F2]">{title}</h1>
            <p className="text-sm text-[#B5B5B5]">{`${company}, ${location}`}</p>
          </div>
          <button className="absolute top-2 right-2">
            <Image width={5} height={20} src={"/icons/three_dot.svg"} alt="" />
          </button>
        </div>
        <div className="pt-4 flex flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Image width={10} height={12} src={"/icons/salary.svg"} alt="" />
            <p className="text-[#B5B5B5] text-[13px]">{salary}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image width={10} height={12} src={"/icons/city.svg"} alt="" />
            <p className="text-[#B5B5B5] text-[13px]">{city}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              width={13}
              height={12}
              src={"/icons/experience.svg"}
              alt=""
            />
            <p className="text-[#B5B5B5] text-[13px]">{experience}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              width={15}
              height={12}
              src={"/icons/applicants.svg"}
              alt=""
            />
            <p className="text-[#B5B5B5] text-[13px]">{applicants}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image width={14} height={13} src={"/icons/views.svg"} alt="" />
            <p className="text-[#B5B5B5] text-[13px]">{views}</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex justify-between items-center">
        <p className="text-[13px] text-[#B5B5B5]">{postedAt}</p>
        <button className="px-3 py-1 rounded-full bg-[#393939] hover:bg-[#4BB3FF] font-bold text-white flex justify-center items-center gap-2">
          Apply
          <Image width={17} height={11} src={"/icons/arrow_right.svg"} alt="" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
