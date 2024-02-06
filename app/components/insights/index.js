import { Michroma, Montserrat } from "next/font/google";
import InsightsCard from "./card";

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
  {
    title: "Healthy Eating Habits for a Better Lifestyle",
    author: "Sophia Anderson",
    duration: "6 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
  {
    title: "Tips for Effective Remote Work",
    author: "Robert Smith",
    duration: "8 mins read",
    coverImage: "/images/insight/insight_dummy.png",
  },
];

const Insights = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center items-center">
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
      </section>
      <section className="pb-4 w-full min-h-screen bg-[#00C2F8]">
        <h1
          className={`${michroma.className} py-5 text-black text-center text-4xl`}
        >
          Insights
        </h1>
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      </section>
    </>
  );
};

export default Insights;
