import "./AnimatedButton.css";
const AnimatedButton = ({ className, children, onClick }) => {
  return (
    <button
      className={`${className ? className : ""} button-animation`}
      onClick={onClick}
      
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
