import Header from "@/components/header";
import Title from "@/components/title";
import EnabledUsers from "@/components/enabledUsers";
import NotEnabledUsers from "@/components/notEnabledUsers";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <div className={styles.Home}>
        <EnabledUsers />
        <NotEnabledUsers />
      </div>
    </>
  );
}
