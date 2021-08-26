import get from "lodash.get";
import { useState, createContext, useContext } from "react";
import { useRouter } from "next/router";
import React from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const router = useRouter();
  const stepper = parseInt(get(router, ["query", "step"]), 10) || 0;
  // const [stepper, setStepper] = React.useState(stepper);
  const [steps, setStepsData] = useState([
    {
      name: "Vertrag",
      status: "active",
    },
    {
      name: "Dateneingabe",
      status: "incomplete",
    },
    {
      name: "Bestätigung",
      status: "incomplete",
    },
  ]);

  React.useEffect(() => {
    router.replace("?step=0");
  }, []);

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

    router.push(`?step=${nextStep}`);
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
