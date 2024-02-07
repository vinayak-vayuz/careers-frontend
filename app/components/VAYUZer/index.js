import { Michroma, Montserrat } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const BecomeAVAYUZer = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className={`${michroma.className} text-[#222222] text-6xl`}>
        #BecomeaVAYUZer
      </h1>
      <p className={`${montserrat.className} text-[#222222] text-`}>
        Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut
        diam.{" "}
      </p>
    </div>
  );
};

export default BecomeAVAYUZer;
