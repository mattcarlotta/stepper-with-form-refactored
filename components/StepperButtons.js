import { useFormData } from "../context";

export default function StepperButtons() {
  const { stepper, setActiveStep } = useFormData();

  return (
    <div className="mt-1 mb-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
      <div className="rounded-md shadow">
        <button
          type="button"
          tabIndex={0}
          onClick={() => setActiveStep(stepper - 1)}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
        >
          Back
        </button>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
        >
          {stepper === 2 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
