import { Michroma, Montserrat } from "next/font/google";
import Link from "next/link";
import AnimatedButton from "../buttons/AnimatedButton";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const BecomeAVAYUZer = ({ id }) => {
  return (
    <section
      id={id}
      className="relative w-full h-screen py-10 bg-[#141414] overflow-hidden flex flex-col justify-center items-center text-center gap-4"
    >
      <div className="spotlight-1"></div>
      <div className="spotlight-2"></div>
      <div className="spotlight-3"></div>
      <h1
        className={`${michroma.className} text-[#222222] text-2xl md:text-6xl z-[2]`}
      >
        #BecomeaVAYUZer
      </h1>
      <p className={`${montserrat.className} text-[#222222] z-[2]`}>
        Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut
        diam.
      </p>
      <AnimatedButton selected={true} className={"z-[2]"}>Enroll Now</AnimatedButton>
      {/* <Link
        className="px-2 py-1 border border-black rounded-full z-[2]"
        target="_blank"
        href={"https://www.vayuz.com/"}
      >
        Enroll Now
      </Link> */}
    </section>
  );
};

export default BecomeAVAYUZer;
