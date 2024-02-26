import "./AnimatedButton.css";
const AnimatedButton = ({ className, children, onClick, selected }) => {
  return (
    <div
      className={`${
        selected
          ? ""
          : "group w-fit bg-gray-400 hover:background-gradient rounded-lg p-[2px] text-center"
      }`}
    >
      <div className={`${selected ? "" : "px-2 py-1 bg-black rounded-lg"}`}>
        <button
          className={`${
            selected
              ? "button-animation"
              : "py-1 font-semibold text-base bg-gray-400 group-hover:text-white group-hover:font-semibold text-transparent bg-clip-text hover:button-animation"
          } ${className ? className : ""} `}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default AnimatedButton;
