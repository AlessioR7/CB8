import { useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onHandleOpen = () => {
    setIsOpen(true);
  };

  const onHandleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.Overlay} ${isOpen ? styles.OverlayOpen : ""}`}
        onClick={onHandleClose}
      ></div>
      <header>
        <div className={styles.Header}>
          <img
            src="/assets/menu_FILL0_wght400_GRAD0_opsz24.svg"
            alt="menu"
            onClick={onHandleOpen}
            className={styles.menu}
          />
          <div className={styles.account}>
            <img
              src="/assets/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
              alt="profile"
              className={styles.image}
            />
            <h3 className={styles.title}>Profile</h3>
          </div>
        </div>
        <nav
          className={`${styles.Sidebar} ${isOpen ? styles["SidebarOpen"] : ""}`}
        >
          <div className={styles.close}>
            <button className={styles.button} onClick={onHandleClose}>
              X
            </button>
          </div>
          <ul className={styles.list}>
            {["Home", "Enabled Users", "Users not Enabled"].map((item) => {
              // Qui ho creato il percorso per ogni elemento dell'array. Se l'elemento
              // è "Home", il percorso sarà "/", altrimenti si converte l'elemento in
              // minuscolo, sostituendo gli spazi con i trattini
              const itemPath =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
              // Quindi qui restituiamo un elemento della lista per ogni
              // elemento dell'array
              return (
                <li className={styles.item} key={item}>
                  <Link href={itemPath}>
                    <span onClick={onHandleClose} className={styles.link}>
                      {item}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
