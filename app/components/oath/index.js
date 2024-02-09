import { useState, useEffect } from "react";
import Image from "next/image";

const OathCeremony = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimationComplete(true);
    }, 100); // Delay the animation for 100ms for smoother transition
  }, []);

  return (
    <section className="relative w-full min-h-screen py-10 bg-[#141414] flex justify-center items-center overflow-hidden">
      {animationComplete ? (
        <video autoPlay muted loop className="w-full sm:w-[60%]" controls>
          <source src="/videos/oath_ceremony.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <></>
      )}
      <div
        className={`transition-transform duration-1000 ease-in-out transform ${
          animationComplete
            ? "absolute -left-2.5 top-1/2 -translate-y-1/2 rotate-[101.5deg]"
            : "absolute top-[44%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <Image
          className={`${
            animationComplete ? "w-[30rem]" : "w-96"
          } hidden xl:block`}
          src={"/images/oath/cover_01.svg"}
          width={872.45}
          height={245.76}
          alt=""
        />
      </div>
      <div
        className={`transition-transform duration-1000 ease-in-out transform ${
          animationComplete
            ? "absolute -right-2.5 top-[49%] -translate-y-1/2 rotate-[101.5deg]"
            : "absolute top-[51%] left-[50%] -translate-x-1/2 -translate-y-1/2 rotate-100"
        }`}
      >
        <Image
          className={`${
            animationComplete ? "w-[30rem]" : "w-96"
          } hidden xl:block`}
          src={"/images/oath/cover_02.svg"}
          width={872.45}
          height={245.76}
          alt=""
        />
      </div>
    </section>
  );
};

export default OathCeremony;
