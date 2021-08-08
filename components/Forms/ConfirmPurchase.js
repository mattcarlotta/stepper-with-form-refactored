import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

export default function ConfirmPurchase({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>Step 3</h2>
    </div>
  );
}
