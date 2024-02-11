import styles from "./index.module.scss";

const UsersTitle = ({ title }) => {
  return (
    <div className={styles.Title}>
      <h2>{title}</h2>
    </div>
  );
};

export default UsersTitle;
