import { useState } from "react";
import Head from "next/head";
import Stepper from '../components/Stepper'
import styles from "../styles/styles.module.scss";
import FormCard from "../components/FormCard";



import {
  PersonalInfo,
  ConfirmPurchase,
  ContractInfo,
} from "../components/Forms";

import FormCompleted from "../components/FormCompleted";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const App = () => {
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  const [activeStep, setActiveStep] = useState(0);
  
  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrevoiusStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    
    <div>
      <Head>
        <title>Next.js Multi Step Form</title>
      </Head>
      < Stepper activeStep={activeStep} />
        <div className={styles.container}>
          <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
            {formStep >= 0 && (
              <ContractInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 1 && (
              <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
              <ConfirmPurchase formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep > 2 && <FormCompleted />}
          </FormCard>
        </div>
        <div className="mt-1 mb-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <a role="button" tabIndex={0}
            onClick={ () => { prevFormStep(); handlePrevoiusStep() }}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
            >
              Back
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              onClick={ () => { nextFormStep(); handleNextStep() }}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
            >
              Next
            </a>
          </div>
      </div>
    </div>
  );
};

export default App;
