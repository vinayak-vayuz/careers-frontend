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
      <section className="w-full min-h-screen bg-[#00C2F8]">
        <h1
          className={`${michroma.className} py-5 text-black text-center text-4xl`}
        >
          Insights
        </h1>
        <InsightsCard />
      </section>
    </>
  );
};

export default Insights;
