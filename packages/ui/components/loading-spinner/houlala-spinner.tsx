import styles from "./spinner.module.scss";

const HoulalaSpinner = () => {
  return (
    <div className={styles.spinner}>
      <svg className={styles.spinnerCircle}></svg>
    </div>
  );
};

export default HoulalaSpinner;