// import styles from "../../styles/styles.module.scss";
import { Fragment } from "react";
import { useFormData } from "../../context";
import StepperButtons from "../StepperButtons";
import styles from "../../styles/styles.module.scss";

export default function PersonalInfo() {
  const { steps, stepper, setActiveStep, saveStepsData } = useFormData();
  const { fields } = steps.find(({ name }) => name === "Dateneingabe");

  const handleChange = ({ target: { name, value } }) => {
    saveStepsData("Dateneingabe", name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(stepper + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, value }) => (
        <Fragment key={name}>
          <label className={styles.label} htmlFor={name}>
            {name}
          </label>
          <input
            key={name}
            type="text"
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
