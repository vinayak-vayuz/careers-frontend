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
    <section className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      {animationComplete ? (
        <video className="w-full sm:w-[60%]" controls>
          <source src="/path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <></>
      )}
      <div
        className={`transition-transform duration-1000 ease-in-out transform ${
          animationComplete
            ? "absolute left-5 top-1/2 -translate-y-1/2 rotate-[101.5deg]"
            : "absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <Image
          className="w-96"
          src={"/images/oath/cover_01.svg"}
          width={872.45}
          height={245.76}
          alt=""
        />
      </div>
      <div
        className={`transition-transform duration-1000 ease-in-out transform ${
          animationComplete
            ? "absolute right-0 top-1/2 -translate-y-1/2 rotate-[101.5deg]"
            : "absolute top-[51%] left-[50%] -translate-x-1/2 -translate-y-1/2 rotate-100"
        }`}
      >
        <Image
          className="w-96"
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
