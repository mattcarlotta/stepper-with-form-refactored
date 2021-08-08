import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [data, setData] = useState({});
  const [steps, setSteps] = useState([
    { name: 'Vertrag', status: 'current' },
    { name: 'Dateneingabe', status: 'upcoming' },
    { name: 'Bestätigung', status: 'upcoming' },
  ]);

  
  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ steps, data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
