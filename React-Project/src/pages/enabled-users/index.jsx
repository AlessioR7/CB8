import Header from "@/components/header";
import EnabledUsers from "@/components/enabledUsers";
import styles from "@/styles/Users.module.scss";

export default function EnabledUsersPage() {
  return (
    <>
      <Header />
      <div className={styles.Users}>
        <span className={styles.check}>✅</span>
        <EnabledUsers showTitle={false} />
      </div>
    </>
  );
}
