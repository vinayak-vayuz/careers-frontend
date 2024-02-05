import { Michroma, Montserrat } from "next/font/google";

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
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full sm:w-[80%] flex flex-col justify-center items-center text-center">
        <h1 className={`${michroma.className} text-white text-4xl`}>
          Insights
        </h1>
        <p className={`${montserrat.className} text-[#DDDDDD]`}>
          Insights is a vibrant knowledge hub, sharing wisdom for continuous
          growth through exploration, learning, and thriving in a boundless
          expanse.
        </p>
      </div>
    </div>
  );
};

export default Insights;
