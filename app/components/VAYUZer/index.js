import { Michroma, Montserrat } from "next/font/google";

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
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center gap-4"
    >
      <div className="spotlight"></div>
      <h1
        className={`${michroma.className} text-[#222222] text-2xl md:text-6xl`}
      >
        #BecomeaVAYUZer
      </h1>
      <p className={`${montserrat.className} text-[#222222] text-`}>
        Lorem ipsum dolor sit amet consectetur. Vel rutrum habitasse cursus ut
        diam.
      </p>
    </section>
  );
};

export default BecomeAVAYUZer;
