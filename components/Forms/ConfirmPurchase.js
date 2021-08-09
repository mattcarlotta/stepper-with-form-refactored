import { Fragment } from "react";
import { useFormData } from "../../context";
import StepperButtons from "../StepperButtons";
import styles from "../../styles/styles.module.scss";

export default function ConfirmPurchase() {
  const { steps, stepper, setActiveStep } = useFormData();
  const fields = steps.reduce((acc, { fields }) => {
    if (fields) acc.push(...fields);
    return acc;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(stepper + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, placeholder, type, value }) => (
        <Fragment key={name}>
          <label className={styles.label} htmlFor={name}>
            {name}
          </label>
          <input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            className={styles.disabledInput}
            readOnly
          />
        </Fragment>
      ))}
      <StepperButtons />
    </form>
  );
}
