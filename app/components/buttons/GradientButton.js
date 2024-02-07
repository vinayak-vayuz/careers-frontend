const GradientButton = ({
  children,
  onclick,
  containerClassName,
  buttonClassName,
}) => {
  return (
    // bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A]
    <div
      className={`${containerClassName} group w-fit bg-white hover:bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A] rounded-3xl p-[2px] text-center`}
    >
      <div className="px-2 py-1 bg-black rounded-3xl">
        <button
          onClick={onclick}
          className={`${buttonClassName} pt-0.5 font-semibold text-base bg-white group-hover:bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A] text-transparent bg-clip-text`}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default GradientButton;
