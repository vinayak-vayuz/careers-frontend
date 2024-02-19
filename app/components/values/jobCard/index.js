const JobCard = ({
  title,
  company,
  location,
  salary,
  address,
  experience,
  applicants,
  views,
  postedAt,
}) => {
  return (
    <div
      className={`${nunito.className} p-4 bg-[#202020] border border-[#313131] rounded-2xl`}
    >
      <div className="relative flex gap-4">
        <div className="p-2 w-16 h-16 bg-[#424242] flex justify-center items-center rounded-2xl">
          <Image width={42} height={20} src={"/icons/y.svg"} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg text-[#F2F2F2]">{title}</h1>
          <p className="text-sm text-[#B5B5B5]">{`${company}, ${location}`}</p>
        </div>
        <button className="absolute top-2 right-2">
          <Image width={10} height={12} src={"/icons/three_dot.svg"} alt="" />
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Image width={10} height={12} src={"/icons/salary.svg"} alt="" />
          <p className="text-[#B5B5B5] text-[13px]">{salary}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#B5B5B5] text-[13px]">{address}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
          >
            <g clip-path="url(#clip0_833_345)">
              <path
                d="M5.10156 1.3125V2.25H8.85156V1.3125C8.85156 1.20938 8.76719 1.125 8.66406 1.125H5.28906C5.18594 1.125 5.10156 1.20938 5.10156 1.3125ZM3.97656 2.25V1.3125C3.97656 0.588281 4.56484 0 5.28906 0H8.66406C9.38828 0 9.97656 0.588281 9.97656 1.3125V2.25H11.4766C12.3039 2.25 12.9766 2.92266 12.9766 3.75V6.5625V9.75C12.9766 10.5773 12.3039 11.25 11.4766 11.25H2.47656C1.64922 11.25 0.976562 10.5773 0.976562 9.75V6.5625V3.75C0.976562 2.92266 1.64922 2.25 2.47656 2.25H3.97656ZM2.10156 7.125V9.75C2.10156 9.95625 2.27031 10.125 2.47656 10.125H11.4766C11.6828 10.125 11.8516 9.95625 11.8516 9.75V7.125H8.47656V7.5C8.47656 7.91484 8.14141 8.25 7.72656 8.25H6.22656C5.81172 8.25 5.47656 7.91484 5.47656 7.5V7.125H2.10156ZM5.47656 6H8.47656H11.8516V3.75C11.8516 3.54375 11.6828 3.375 11.4766 3.375H9.41406H4.53906H2.47656C2.27031 3.375 2.10156 3.54375 2.10156 3.75V6H5.47656Z"
                fill="#B5B5B5"
              />
            </g>
            <defs>
              <clipPath id="clip0_833_345">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0.976562)"
                />
              </clipPath>
            </defs>
          </svg>
          <Image width={13} height={12} src={"/icons/experience.svg"} alt="" />
          <p className="text-[#B5B5B5] text-[13px]">{experience}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image width={15} height={12} src={"/icons/applicants.svg"} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
          >
            <g clip-path="url(#clip0_833_330)">
              <path
                d="M5.04 6C6.63075 6 7.92 4.6568 7.92 3C7.92 1.3432 6.63075 0 5.04 0C3.44925 0 2.16 1.3432 2.16 3C2.16 4.6568 3.44925 6 5.04 6ZM5.04 1.125C6.03247 1.125 6.84 1.96617 6.84 3C6.84 4.03383 6.03247 4.875 5.04 4.875C4.04752 4.875 3.24 4.03359 3.24 3C3.24 1.96617 4.04775 1.125 5.04 1.125ZM6.18075 7.125H3.89925C1.74532 7.125 0 8.94375 0 11.1867C0 11.6367 0.3492 12 0.77985 12H9.29925C9.73125 12 10.08 11.6367 10.08 11.1867C10.08 8.94375 8.334 7.125 6.18075 7.125ZM1.09597 10.875C1.24605 9.40078 2.44575 8.25 3.89925 8.25H6.18075C7.63447 8.25 8.8155 9.40148 8.98425 10.875H1.09597ZM10.7797 7.5H9.11812C10.152 8.38359 10.8 9.70547 10.8 11.1867C10.8 11.4867 10.7145 11.7633 10.575 12H13.68C14.0782 12 14.4 11.6625 14.4 11.2289C14.4 9.17813 12.789 7.5 10.7797 7.5ZM9.72 6C11.1127 6 12.24 4.82578 12.24 3.375C12.24 1.92422 11.1127 0.75 9.72 0.75C9.15502 0.75 8.6391 0.950508 8.2188 1.27758C8.478 1.79602 8.64 2.37656 8.64 3C8.64 3.8325 8.37157 4.59703 7.92922 5.21977C8.38575 5.7 9.018 6 9.72 6Z"
                fill="#B5B5B5"
              />
            </g>
            <defs>
              <clipPath id="clip0_833_330">
                <rect width="14.4" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-[#B5B5B5] text-[13px]">{applicants}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image width={14} height={13} src={"/icons/views.svg"} alt="" />
          <p className="text-[#B5B5B5] text-[13px]">{views}</p>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <p className="text-[13px] text-[#B5B5B5]">{postedAt}</p>
        <button className="px-3 py-1 rounded-full bg-[#393939] hover:bg-[#4BB3FF] font-bold text-white flex justify-center items-center gap-2">
          Apply
          <Image width={17} height={11} src={"/icons/arrow_right.svg"} alt="" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
