import React, { useState, useEffect, useRef } from "react";
import { eventsData } from "../events/eventsData";

const Test = () => {
  const [lastPos, setLastPos] = useState(0);
  const perspective = 300;
  const zSpacing = -1000;
  const numFrames = 2;

  const scrollMsgRef = useRef(null);
  const frames = Array.from({ length: numFrames }, () => useRef(null));

  const zVals = Array.from(
    { length: numFrames },
    (_, i) => (numFrames - i) * zSpacing
  );

  const handleScroll = () => {
    const top = window.scrollY || document.documentElement.scrollTop;
    const delta = lastPos - top;
    setLastPos(top);

    zVals.forEach((zVal, i) => {
      const newZVal = zVal + delta * -1.5;
      const frame = frames[i].current;
      const transform = `translateZ(${newZVal}px)`;
      const opacity =
        newZVal < 200
          ? 1
          : 1 - parseInt(((newZVal - 200) / (perspective - 200)) * 10) / 10;
      const display = newZVal > perspective ? "none" : "block";

      frame.style.transform = transform;
      frame.style.opacity = opacity;
      frame.style.display = display;

      if (zVals[numFrames - 1] > 200 && scrollMsgRef.current) {
        scrollMsgRef.current.style.display = "none";
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body-content">
      <div id="content">
        <div id="viewport">
          {/* <div id="instructions-overlay" ref={scrollMsgRef}>
            <h1>Initial Instructions Overlay</h1>
            <p>This will go away after you scroll</p>
            <p>
              Orig Source Code From{" "}
              <a href="http://eng.wealthfront.com/2012/03/22/scrolling-z-axis-with-css-3d-transforms/">
                Matt Baker
              </a>
            </p>
          </div> */}

          {frames.map((frame, index) => (
            <div
              key={index}
              className={`frame ${index % 2 === 0 ? "box" : "text"}`}
              style={{ transform: `translateZ(${zVals[index]}px)` }}
              ref={frame}
            >
              {/* <h1>{`Frame ${numFrames - index} (${
                index % 2 === 0 ? "Box" : "Text"
              })`}</h1> */}
              {eventsData.map((data, index) => (
                <img className={data.className} key={index} src={data.imageSrc} />
              ))}
              {/* {index === 8 && <p>Lorem ipsum</p>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
