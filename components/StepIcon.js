const StepIcon = ({ children }) => (
  <span className="h-9 flex flex-col items-center">
    <span className="z-10 w-8 h-8 flex items-center justify-center rounded-full">
      <span
        className="relative h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
        style={{ top: "0.8rem" }}
      />
    </span>
    <span
      className="text-xs font-semibold tracking-wide text-gray-600"
      style={{ marginTop: "2.72rem" }}
    >
      {children}
    </span>
  </span>
);

export default StepIcon;
