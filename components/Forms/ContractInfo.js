import { useFormData } from "../../context";
import StepperButtons from "../StepperButtons";

export default function ContractInfo() {
  const { stepper, setActiveStep } = useFormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(stepper + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Step 0</h1>
      <StepperButtons />
    </form>
  );
}
