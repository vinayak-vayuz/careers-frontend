import Image from "next/image";

const InsightsCard = ({ title, author, duration, coverImage }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content p-2 flex justify-between">
            <h1 className="font-semibold">{title}</h1>
            <div className="flex gap-2 font-semibold text-xs">
              <p>By {author}</p> <p>|</p> <p>{duration}</p>
            </div>
          </div>
        </div>
        <div className="front">
          <div className="front-content relative">
            <Image src={coverImage} width={447} height={338} alt="" />
            <button>
              <Image
                className="absolute bottom-2 right-2"
                src={"/images/insight/arrow.svg"}
                width={30}
                height={31}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;
