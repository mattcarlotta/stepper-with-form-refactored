import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [stepper, setStepper] = useState(0);
  const [steps, setStepsData] = useState([
    {
      name: "Vertrag",
      fields: [{ name: "username", type: "text", value: "" }],
      status: "active",
    },
    {
      name: "Dateneingabe",
      fields: [{ name: "password", type: "password", value: "" }],
      status: "incomplete",
    },
    {
      name: "Bestätigung",
      fields: [{ name: "email", type: "email", value: "" }],
      status: "incomplete",
    },
  ]);

  const saveStepsData = (name, fieldName, value) => {
    setStepsData((prevState) =>
      prevState.map((step) =>
        step.name === name
          ? {
              ...step,
              fields: step.fields.map((field) =>
                field.name === fieldName ? { ...field, value } : field
              ),
            }
          : step
      )
    );
  };

  const setActiveStep = (step) => {
    const nextStep =
      step >= 0 && step < steps.length ? step : step < 0 ? 0 : steps.length;

    setStepsData((prevState) =>
      prevState.map((step) =>
        step.name ===
        (prevState[stepper] && nextStep !== stepper
          ? prevState[stepper].name
          : "")
          ? { ...step, status: "completed" }
          : step.name === (prevState[nextStep] ? prevState[nextStep].name : "")
          ? { ...step, status: "active" }
          : step
      )
    );
    setStepper(nextStep);
  };

  return (
    <FormContext.Provider
      value={{ saveStepsData, setActiveStep, steps, stepper }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
