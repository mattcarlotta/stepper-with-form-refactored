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

  return (
    <div>
      <Head>
        <title>Next.js Multi Step Form</title>
      </Head>
      <Stepper />
      <div className={styles.container}>
        <div className={styles.formCard}>
          {stepper === 0 && <ContractInfo />}
          {stepper === 1 && <PersonalInfo />}
          {stepper === 2 && <ConfirmPurchase />}
          {stepper === 3 && <FormCompleted />}
        </div>
      </div>
    </div>
  );
};

export default App;
