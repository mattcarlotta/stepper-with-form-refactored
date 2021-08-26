import { useFormData } from "../../context";
import StepperButtons from "../StepperButtons";

export default function PersonalInfo() {
  const { stepper, setActiveStep } = useFormData(); // steps, saveStepsData

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    setActiveStep(stepper + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Step 1</h1>
      <StepperButtons />
    </form>
  );
}
