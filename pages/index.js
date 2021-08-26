import Head from "next/head";
import Stepper from "../components/Stepper";
import {
  PersonalInfo,
  ConfirmPurchase,
  ContractInfo,
} from "../components/Forms";
import { useFormData } from "../context";
import FormCompleted from "../components/FormCompleted";
import styles from "../styles/styles.module.scss";

const App = () => {
  const { stepper } = useFormData();

  console.log("stepper", stepper);

  return (
    <div>
      <Head>
        <title>Next.js Multi Step Form</title>
      </Head>
      <Stepper />
      <div className={styles.container}>
        <div className={styles.formCard}>
          {
            {
              0: <ContractInfo />,
              1: <PersonalInfo />,
              2: <ConfirmPurchase />,
              3: <FormCompleted />,
            }[stepper]
          }
        </div>
      </div>
    </div>
  );
};

export default App;
