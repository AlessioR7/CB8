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
              const itemPath =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

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
