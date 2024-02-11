import Header from "@/components/header";
import NotEnabledUsers from "@/components/notEnabledUsers";
import styles from "@/styles/Users.module.scss";

export default function UsersNotEnabledPage() {
  return (
    <>
      <Header />
      <div className={styles.Users}>
        <span className={styles.check}>❌</span>
        <NotEnabledUsers showTitle={false} />
      </div>
    </>
  );
}
