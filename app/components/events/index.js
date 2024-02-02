import Image from "next/image";

const eventsData = [
  { imageSrc: "/images/events/flutter_nest.png", className: "absolute", width: 332, height: 174 },
  { imageSrc: "/images/events/birthday_matinee.png", className: "absolute", width: 287, height: 231 },
  { imageSrc: "/images/events/blank_event_01.png", className: "absolute", width: 144, height: 117 },
  { imageSrc: "/images/events/demo_saturday.png", className: "absolute", width: 337, height: 294 },
  { imageSrc: "/images/events/horcrux.png", className: "absolute", width: 396, height: 320 },
  { imageSrc: "/images/events/drishtikone.png", className: "absolute", width: 330, height: 330 },
  { imageSrc: "/images/events/blank_event_02.png", className: "absolute", width: 221, height: 185 },
  { imageSrc: "/images/events/blank_event_03.png", className: "absolute", width: 224, height: 183 },
  { imageSrc: "/images/events/developer_meet.png", className: "absolute", width: 206, height: 165 },
];

const Events = () => {
  return (
    <div className="relative px-4 w-full min-h-screen flex">
      {eventsData.map((data, index) => (
        <Image key={index} className={data.className} src={data.imageSrc} />
      ))}
    </div>
  );
};

export default Events;
