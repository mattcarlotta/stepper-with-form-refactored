import { useFormData } from "../../context";
import { useState } from "react";
import { Card } from "../Card.js"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContractInfo({ formStep, selected }) {
  const { setFormValues } = useFormData();
  const [isSelected, setisSelected] = useState();


  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  const mode = selected ? 'border-red-300 border-8' : 'border-gray-400'

  return (
    <div className={formStep === 0 ? 'block' : 'hidden'}>
      <h2>Step1</h2>
    </div>
  );
}
