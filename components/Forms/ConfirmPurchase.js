import { Fragment } from "react";
import { useFormData } from "../../context";
import StepperButtons from "../StepperButtons";
import styles from "../../styles/styles.module.scss";

export default function ConfirmPurchase() {
  const { steps, stepper, setActiveStep, saveStepsData } = useFormData();
  const { fields } = steps.find(({ name }) => name === "Bestätigung");

  const handleChange = ({ target: { name, value } }) => {
    saveStepsData("Bestätigung", name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(stepper + 1);
  };

  // const mode = selected ? "border-red-300 border-8" : "border-gray-400";

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, type, value }) => (
        <Fragment key={name}>
          <label className={styles.label} htmlFor={name}>
            {name}
          </label>
          <input
            key={name}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
          />
          <StepperButtons />
        </Fragment>
      ))}
    </form>
  );
}
