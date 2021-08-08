import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";
import { useState } from 'react'





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PersonalInfo({ formStep, nextFormStep }) {
  const [agreed, setAgreed] = useState(false)
  const { setFormValues } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
    prevFormStep();
  };

  return (
    <div className={formStep === 1 ? 'block' : 'hidden'}>
      <h2>Step2</h2>
    </div>
  );
}
