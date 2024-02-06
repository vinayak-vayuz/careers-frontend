import Image from "next/image";

const OathCeremony = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        className="w-96 absolute top-[45%] -translate-y-1/2 left-1/2 -translate-x-1/2"
        src={"/images/oath/cover_01.svg"}
        width={872.45}
        height={245.76}
        alt=""
      />
      <Image
        className="w-96 absolute top-[51%] -translate-y-1/2 left-[52%] -translate-x-1/2"
        src={"/images/oath/cover_02.svg"}
        width={872.45}
        height={245.76}
        alt=""
      />
    </div>
  );
};

export default OathCeremony;
