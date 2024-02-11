import styles from "./index.module.scss";

const Title = () => {
  return (
    <div className={styles.Title}>
      <h1 className={styles.text}>ARCHIVE</h1>
      <img
        src="/assets/trianglify-lowres.png"
        alt="image"
        className={styles.image}
      />
    </div>
  );
};

export default Title;
