import { useState } from "react";
import JobCard from "./jobCard";
import { jobData } from "./JobData";
import { motion } from "framer-motion";
import ScrollVelocity from "../scrollVelocity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const buttons = [
  { id: 1, label: "Designer" },
  { id: 2, label: "Web Developers" },
  { id: 3, label: "Mobile Developers" },
  { id: 4, label: "Marketing" },
  { id: 5, label: "Human Resources" },
];

const Values = ({ id }) => {
  const [active, setActive] = useState(false);
  const [buttonid, setButtonid] = useState(0);

  const handleClick = (buttonid) => {
    setButtonid(buttonid);
    setActive(!active);
  };

  // Filter the jobData based on the selected category
  const filteredJobData = jobData.filter((data) => {
    if (buttonid === 0) {
      return data.category === buttons[buttonid].label;
    } else {
      // Otherwise, filter by category
      return data.category === buttons[buttonid].label;
    }
  });

  return (
    <section
      id={id}
      className="duration-300 overflow-hidden"
      // transition={{ duration: 1 }}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
    >
      <div className="w-full bg-[#141414] py-10">
        <div
          className={`${montserrat.className} flex justify-center items-center gap-4 text-white text-4xl overflow-hidden`}
        >
          <ScrollVelocity />
        </div>
        <div className="my-8 px-2 sm:px-14 flex flex-nowrap items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth">
          {buttons.map((data, index) => (
            <div
              onClick={() => handleClick(index)}
              key={index}
              className={`${
                index === buttonid &&
                "bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A]"
              } group w-fit bg-gray-500 hover:bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A] rounded-lg p-[2px] text-center`}
            >
              <div className="px-2 py-1 bg-[#141414] rounded-lg">
                <button
                  className={`${
                    index === buttonid &&
                    "bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A]"
                  } text-lg whitespace-nowrap pt-0.5 font-semibold bg-gray-500 group-hover:bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A] text-transparent bg-clip-text`}
                >
                  {data.label}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="px-2 sm:px-14 w-full">
          <Swiper
            className={"mySwiper py-10"}
            // slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 3,
              },
              1024: {
                // width: 768,
                slidesPerView: 3,
              },
            }}
            modules={[FreeMode]}
          >
            {filteredJobData.map((data, index) => (
              <SwiperSlide key={index}>
                <JobCard
                  title={data.title}
                  company={data.company}
                  location={data.location}
                  salary={data.salary}
                  city={data.city}
                  experience={data.experience}
                  applicants={data.applicants}
                  views={data.views}
                  postedAt={data.postedAt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="mb-8 mx-2 sm:mx-14 w-full overflow-x-auto flex flex-nowrap gap-4">
          Job Card Section
          {filteredJobData.map((data, index) => (
            <JobCard
              key={index}
              title={data.title}
              company={data.company}
              location={data.location}
              salary={data.salary}
              city={data.city}
              experience={data.experience}
              applicants={data.applicants}
              views={data.views}
              postedAt={data.postedAt}
            />
          ))}
        </div> */}
        {/* Video Section */}
        {/* <div className="w-full min-h-[50vh] bg-green-500"></div> */}
      </div>
    </section>
  );
};

export default Values;
