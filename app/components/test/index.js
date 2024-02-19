import React from "react";
import { motion, useAnimation } from "framer-motion";

const ParallaxComponent = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const translateY = -scrollY * 0.3;

    controls.start({ translateY });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      <motion.div className="sticky top-0 left-0 h-screen w-1/2 bg-yellow-600 flex justify-center items-center">
        <h1>Sticky Section</h1>
      </motion.div>

      <motion.div
        className="w-1/2 h-[300vh] bg-red-600 flex justify-center items-center\"
        animate={controls}
      >
        <h1>Parallax Section</h1>
        {/* Add your text content or article here */}
        <p>
          As a Frontend Developer at [Your Company Name], you will play a key
          role in designing, implementing, and maintaining our user interfaces.
          You will collaborate with cross-functional teams, including designers
          and backend developers, to create visually appealing and highly
          functional web applications. The ideal candidate is not only
          proficient in frontend technologies but also possesses a keen eye for
          design, usability, and performance optimization.
        </p>
      </motion.div>
    </div>
  );
};

export default ParallaxComponent;
