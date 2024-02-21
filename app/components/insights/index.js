import InsightsCard from "./card";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Michroma, Montserrat } from "next/font/google";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const insightData = [
  {
    title: "Error Handling in React Functional Components: A Practical Guide",
    author: "Pankaj Singh",
    duration: "5 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  {
    title: "10 Tips for Effective Time Management",
    author: "Emily Smith",
    duration: "7 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  {
    title: "The Importance of Sleep for Productivity",
    author: "John Doe",
    duration: "6 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  {
    title: "Introduction to Machine Learning Algorithms",
    author: "Sarah Johnson",
    duration: "10 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  {
    title: "Effective Communication Strategies for Teams",
    author: "Michael Brown",
    duration: "8 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  {
    title: "How to Start Your Own Business: A Beginner's Guide",
    author: "Jennifer Lee",
    duration: "12 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  {
    title: "The Benefits of Regular Exercise",
    author: "David Miller",
    duration: "9 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  {
    title: "Introduction to Cryptocurrency: Understanding Bitcoin",
    author: "Alex Johnson",
    duration: "7 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  // {
  //   title: "Healthy Eating Habits for a Better Lifestyle",
  //   author: "Sophia Anderson",
  //   duration: "6 mins read",
  //   coverImage: "/images/insight/insight_dummy.png",
  // },
  // {
  //   title: "Tips for Effective Remote Work",
  //   author: "Robert Smith",
  //   duration: "8 mins read",
  //   coverImage: "/images/insight/insight_dummy.png",
  // },
];

const Insights = ({ id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <section
          id={id}
          className="hidden sm:flex relative w-full sm:min-h-screen py-10 bg-[#141414] flex-col justify-center items-center"
        >
          <div className="w-full sm:w-[80%] flex flex-col justify-center items-center text-center gap-4">
            <h1 className={`${michroma.className} text-white text-4xl`}>
              Insights
            </h1>
            <p className={`${montserrat.className} text-[#DDDDDD]`}>
              Insights is a vibrant knowledge hub, sharing wisdom for continuous
              growth through exploration, learning, and thriving in a boundless
              expanse.
            </p>
          </div>
          <div className="bg-[#00C2F8] w-4 h-4 rounded-full absolute top-[42%] left-[48.4%] -translate-x-[50%] -translate-y-[50%]"></div>
        </section>
      ) : (
        <section className="pb-4 w-full sm:min-h-screen bg-[#00C2F8]">
          <h1
            className={`${michroma.className} py-5 text-black text-center text-4xl`}
          >
            Insights
          </h1>
          <div className="hidden sm:grid w-full px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
            {insightData.map((data, index) => (
              <InsightsCard
                key={index}
                title={data.title}
                author={data.author}
                duration={data.duration}
                coverImage={data.coverImage}
              />
            ))}
          </div>
          <div className="block sm:hidden px-2 w-full">
            <Swiper
              className={"mySwiper py-10"}
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              
              modules={[FreeMode]}
            >
              {insightData.map((data, index) => (
                <SwiperSlide key={index}>
                  <InsightsCard
                    title={data.title}
                    author={data.author}
                    duration={data.duration}
                    coverImage={data.coverImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};

export default Insights;
