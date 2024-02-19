import { useState } from "react";
import JobCard from "./jobCard";
import { jobData } from "./JobData";
import { motion } from "framer-motion";
import ScrollVelocity from "../scrollVelocity";
import { Montserrat, Nunito } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

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
    <motion.section
      id={id}
      className="duration-300"
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="w-full min-h-screen bg-[#141414] py-10">
        <div
          className={`${montserrat.className} flex justify-center items-center gap-4 text-white text-4xl overflow-hidden`}
        >
          <ScrollVelocity />
        </div>
        <div className="my-8 flex flex-wrap justify-center items-center gap-4">
          {buttons.map((data, index) => (
            <div
              onClick={() => handleClick(index)}
              key={index}
              className={`${
                index === buttonid &&
                "bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A]"
              } group w-fit bg-white hover:bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A] rounded-lg p-[1px] text-center`}
            >
              <div className="px-2 py-1 bg-black rounded-lg">
                <button
                  className={`${
                    index === buttonid &&
                    "bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A]"
                  } text-xl pt-0.5 font-semibold bg-white group-hover:bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A] text-transparent bg-clip-text`}
                >
                  {data.label}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8 mx-2 sm:mx-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Job Card Section */}
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
        </div>
        {/* Video Section */}
        <div className="w-full min-h-[50vh] bg-green-500"></div>
      </div>
    </motion.section>
  );
};

export default Values;
