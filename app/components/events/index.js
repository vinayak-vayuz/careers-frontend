import Image from "next/image";

const eventsData = [
  {
    imageSrc: "/images/events/flutter_nest.png",
    className: "absolute top-0 left-0",
    width: 332,
    height: 174,
  },
  {
    imageSrc: "/images/events/birthday_matinee.png",
    className: "absolute top-[10%] left-[25%]",
    width: 287,
    height: 231,
  },
  {
    imageSrc: "/images/events/blank_event_01.png",
    className: "absolute top-[10%] left-[60%] scale-50",
    width: 144,
    height: 117,
  },
  {
    imageSrc: "/images/events/demo_saturday.png",
    className: "absolute top-[2%] right-[0%]",
    width: 337,
    height: 294,
  },
  {
    imageSrc: "/images/events/horcrux.png",
    className: "absolute top-[50%] left-[10%]",
    width: 396,
    height: 320,
  },
  {
    imageSrc: "/images/events/drishtikone.png",
    className: "absolute top-[40%] right-[20%]",
    width: 330,
    height: 330,
  },
  {
    imageSrc: "/images/events/blank_event_02.png",
    className: "absolute bottom-[0%] left-[0%] w-24",
    width: 221,
    height: 185,
  },
  {
    imageSrc: "/images/events/blank_event_03.png",
    className: "absolute bottom-[0%] right-[50%] w-32",
    width: 224,
    height: 183,
  },
  {
    imageSrc: "/images/events/developer_meet.png",
    className: "absolute bottom-[0%] right-[2%]",
    width: 206,
    height: 165,
  },
];

const Events = () => {
  return (
    <>
    

      <div className="my-10 relative px-4 w-full min-h-screen flex">
        {eventsData.map((data, index) => (
          <Image
            key={index}
            className={`${data.className} w-52`}
            src={data.imageSrc}
            width={data.width}
            height={data.height}
          />
        ))}
      </div>
    </>
  );
};

export default Events;
