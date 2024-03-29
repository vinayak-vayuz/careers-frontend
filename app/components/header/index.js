import { Permanent_Marker } from "next/font/google";
import Image from "next/image";
import React from "react";

const permanent_Marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="fixed top-0 w-full p-4 flex sm:justify-end md:justify-center z-50">
      <div className="fixed top-4 left-0 sm:left-4 p-2 rounded-full backdrop-blur-xl">
        <Image
          className="scale-75"
          src={"/images/vayuz_logo.svg"}
          width={162}
          height={38}
          alt="logo"
        />
      </div>
      <button className="block sm:hidden p-2 bg-[#5B5B5B] rounded-full absolute top-5 right-4">
        <Image src={"/icons/search.svg"} width={18} height={18} alt="search" />
      </button>
      <div className="hidden sm:flex sm:justify-end md:justify-center items-center gap-2">
        <button className="p-3 rounded-full bg-[#2C2C2C] flex justify-center items-center">
          <svg
            // className="scale-75"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_807_18321)">
              <path
                d="M23.121 9.06887L15.536 1.48287C14.5973 0.546856 13.3257 0.0212402 12 0.0212402C10.6744 0.0212402 9.40277 0.546856 8.46401 1.48287L0.879012 9.06887C0.599438 9.34665 0.377782 9.67717 0.226895 10.0413C0.0760072 10.4053 -0.0011104 10.7958 1.20795e-05 11.1899V21.0069C1.20795e-05 21.8025 0.316083 22.5656 0.878692 23.1282C1.4413 23.6908 2.20436 24.0069 3.00001 24.0069H21C21.7957 24.0069 22.5587 23.6908 23.1213 23.1282C23.6839 22.5656 24 21.8025 24 21.0069V11.1899C24.0011 10.7958 23.924 10.4053 23.7731 10.0413C23.6222 9.67717 23.4006 9.34665 23.121 9.06887ZM15 22.0069H9.00001V18.0729C9.00001 17.2772 9.31608 16.5142 9.87869 15.9515C10.4413 15.3889 11.2044 15.0729 12 15.0729C12.7957 15.0729 13.5587 15.3889 14.1213 15.9515C14.6839 16.5142 15 17.2772 15 18.0729V22.0069ZM22 21.0069C22 21.2721 21.8947 21.5264 21.7071 21.714C21.5196 21.9015 21.2652 22.0069 21 22.0069H17V18.0729C17 16.7468 16.4732 15.475 15.5355 14.5373C14.5979 13.5997 13.3261 13.0729 12 13.0729C10.6739 13.0729 9.40216 13.5997 8.46448 14.5373C7.5268 15.475 7.00001 16.7468 7.00001 18.0729V22.0069H3.00001C2.7348 22.0069 2.48044 21.9015 2.29291 21.714C2.10537 21.5264 2.00001 21.2721 2.00001 21.0069V11.1899C2.00094 10.9248 2.1062 10.6709 2.29301 10.4829L9.87801 2.89987C10.4417 2.3388 11.2047 2.02381 12 2.02381C12.7953 2.02381 13.5583 2.3388 14.122 2.89987L21.707 10.4859C21.8931 10.6731 21.9983 10.9259 22 11.1899V21.0069Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_807_18321">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div
          className={`${permanent_Marker.className} px-6 pt-3 pb-3 rounded-full bg-[#2C2C2C] flex gap-4`}
        >
          <button className="text-white">
            Life at VAYUZ{" "}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="13"
              viewBox="0 0 92 13"
              fill="none"
            >
              <path
                d="M1 7.37771C31.9751 1.01313 47.6253 1.35991 80.883 1.01313C114.141 0.666356 54.0986 7.27059 61.7274 11.0148C66.244 13.2315 75.5847 11.0148 75.5847 11.0148"
                stroke="#F8004A"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg> */}
          </button>
          <button className="text-white">
            Work at VAYUZ{" "}
            {/* <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="13"
                viewBox="0 0 92 13"
                fill="none"
              >
                <path
                  d="M1 7.37771C31.9751 1.01313 47.6253 1.35991 80.883 1.01313C114.141 0.666356 54.0986 7.27059 61.7274 11.0148C66.244 13.2315 75.5847 11.0148 75.5847 11.0148"
                  stroke="#F8004A"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span> */}
          </button>
        </div>
        <button className="p-3 rounded-full bg-[#2C2C2C] flex justify-center items-center">
          <svg
            className="scale-75"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_809_18384)">
              <path
                d="M23.7078 22.2938L17.7388 16.3248C19.3654 14.3354 20.1651 11.7969 19.9726 9.23432C19.7801 6.67179 18.61 4.28129 16.7043 2.55728C14.7987 0.833269 12.3034 -0.0923492 9.7344 -0.0281174C7.16545 0.0361144 4.71946 1.08528 2.90237 2.90237C1.08528 4.71946 0.0361144 7.16545 -0.0281174 9.7344C-0.0923492 12.3034 0.833269 14.7987 2.55728 16.7043C4.28129 18.61 6.67179 19.7801 9.23432 19.9726C11.7969 20.1651 14.3354 19.3654 16.3248 17.7388L22.2938 23.7078C22.4824 23.8899 22.735 23.9907 22.9972 23.9884C23.2594 23.9862 23.5102 23.881 23.6956 23.6956C23.881 23.5102 23.9862 23.2594 23.9884 22.9972C23.9907 22.735 23.8899 22.4824 23.7078 22.2938ZM10.0008 18.0008C8.41851 18.0008 6.87179 17.5316 5.5562 16.6525C4.2406 15.7735 3.21522 14.524 2.60972 13.0622C2.00422 11.6004 1.84579 9.99189 2.15448 8.44004C2.46316 6.88819 3.22508 5.46272 4.3439 4.3439C5.46272 3.22508 6.88819 2.46316 8.44004 2.15448C9.99189 1.84579 11.6004 2.00422 13.0622 2.60972C14.524 3.21522 15.7735 4.2406 16.6525 5.5562C17.5316 6.87179 18.0008 8.41851 18.0008 10.0008C17.9984 12.1218 17.1548 14.1552 15.655 15.655C14.1552 17.1548 12.1218 17.9984 10.0008 18.0008Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_809_18384">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="p-3 rounded-full bg-[#2C2C2C] flex justify-center items-center gap-2">
          {/* <h1 className={`${permanent_Marker.className} text-white`}>
            Sign In
          </h1> */}
          <Image width={24} height={25} src={"/icons/user.svg"} />
          {/* <svg
            className="scale-75"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_827_45)">
              <path
                d="M17 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2H17C16.7348 2 16.4804 1.89464 16.2929 1.70711C16.1054 1.51957 16 1.26522 16 1C16 0.734784 16.1054 0.48043 16.2929 0.292893C16.4804 0.105357 16.7348 0 17 0L19 0C20.3256 0.00158786 21.5964 0.528882 22.5338 1.46622C23.4711 2.40356 23.9984 3.67441 24 5V19C23.9984 20.3256 23.4711 21.5964 22.5338 22.5338C21.5964 23.4711 20.3256 23.9984 19 24H17C16.7348 24 16.4804 23.8946 16.2929 23.7071C16.1054 23.5196 16 23.2652 16 23C16 22.7348 16.1054 22.4804 16.2929 22.2929C16.4804 22.1054 16.7348 22 17 22Z"
                fill="white"
              />
              <path
                d="M1.00092 11.0003L16.7779 11.0323C16.6902 10.8694 16.5805 10.7193 16.4519 10.5863L12.5729 6.70733C12.4774 6.61508 12.4012 6.50473 12.3488 6.38273C12.2964 6.26073 12.2688 6.12951 12.2677 5.99673C12.2665 5.86395 12.2918 5.73227 12.3421 5.60937C12.3924 5.48647 12.4666 5.37482 12.5605 5.28093C12.6544 5.18704 12.7661 5.11278 12.889 5.0625C13.0119 5.01222 13.1435 4.98692 13.2763 4.98807C13.4091 4.98923 13.5403 5.01681 13.6623 5.06922C13.7843 5.12163 13.8947 5.19782 13.9869 5.29333L17.8679 9.17233C18.6178 9.92244 19.0391 10.9397 19.0391 12.0003C19.0391 13.061 18.6178 14.0782 17.8679 14.8283L13.9889 18.7073C13.8967 18.8028 13.7863 18.879 13.6643 18.9314C13.5423 18.9838 13.4111 19.0114 13.2783 19.0126C13.1455 19.0137 13.0139 18.9884 12.891 18.9381C12.7681 18.8879 12.6564 18.8136 12.5625 18.7197C12.4686 18.6258 12.3944 18.5142 12.3441 18.3913C12.2938 18.2684 12.2685 18.1367 12.2697 18.0039C12.2708 17.8711 12.2984 17.7399 12.3508 17.6179C12.4032 17.4959 12.4794 17.3856 12.5749 17.2933L16.4539 13.4143C16.5658 13.2991 16.6635 13.1708 16.7449 13.0323L1.00092 13.0003C0.735699 13.0003 0.481344 12.895 0.293808 12.7074C0.106272 12.5199 0.000915527 12.2655 0.000915527 12.0003C0.000915527 11.7351 0.106272 11.4808 0.293808 11.2932C0.481344 11.1057 0.735699 11.0003 1.00092 11.0003Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_827_45">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(-1 0 0 1 24 0)"
                />
              </clipPath>
            </defs>
          </svg> */}
        </button>
      </div>
    </header>
  );
};

export default Header;
