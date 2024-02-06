const GradientButton = ({ children }) => {
  return (
    <div className="w-fit bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A] rounded-3xl p-[2px] text-center">
      <div className="px-2 py-1 bg-black rounded-3xl">
        <button
          className={`pt-0.5 font-semibold text-base bg-gradient-to-r from-[#9208CE] via-[#FC0600] to-[#0AD80A] text-transparent bg-clip-text`}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default GradientButton;
