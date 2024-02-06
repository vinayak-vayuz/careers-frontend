import GradientButton from "../buttons/GradientButton";

const buttons = [
  "Convergence",
  "Birthday matinee",
  "Saturday Events",
  "Holi",
  "Diwali",
  "Christmas",
];
const Memoirs = () => {
  return (
    <div className="p-6 w-full min-h-screen">
      <div className="flex flex-wrap gap-2">
        {buttons.map((data, index) => (
          <GradientButton key={index}>{data}</GradientButton>
        ))}
      </div>
    </div>
  );
};

export default Memoirs;
