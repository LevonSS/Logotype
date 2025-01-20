import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoBox}>
      <img
        src="../../src/assets/images/Logo.svg"
        alt="Logo"
        className={styles.logoBox__logo}
      />
    </div>
  );
};

export default Logo;
