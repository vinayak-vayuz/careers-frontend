import Image from "next/image";

const InsightsCard = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content flex justify-between">
            <h1 className="font-semibold">
              Error Handling in React Functional Components: A Practical Guide
            </h1>
            <div className="flex gap-2">
              <p>By Pankaj Singh</p> <p>|</p> <p>5 mins read</p>
            </div>
          </div>
        </div>
        <div className="front">
          <div className="front-content relative">
            <Image
              src={"/images/insight/insight_dummy.png"}
              width={447}
              height={338}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;
