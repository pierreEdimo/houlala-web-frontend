import styles from "./spinner.module.scss";

export const HoulalaSpinner = () => {
  return (
    <div className={styles.spinner}>
      <svg className={styles.spinnerCircle}></svg>
    </div>
  )
}