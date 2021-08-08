import styles from "../styles/styles.module.scss";

export default function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <div className={styles.formCard}>
      {children}
    </div>
  );
}
