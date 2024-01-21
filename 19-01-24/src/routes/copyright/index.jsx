import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export default function Copyright() {
  return (
    <div className={styles.Copyright}>
      <h1 className={styles.title}>Regolamento dell'applicazione</h1>
      <p className={styles.text}>
        Benvenuto nella nostra applicazione. Quando utilizzi i nostri servizi,
        accetti queste condizioni. Ti preghiamo di leggerle attentamente.
      </p>
      <h2 className={styles.title}>Utilizzo dei Servizi</h2>
      <p className={styles.text}>
        Non interferire con i nostri Servizi o cercare di accedervi utilizzando
        un metodo diverso dall'interfaccia e dalle istruzioni che ti forniamo{" "}
      </p>
      <div className={styles.link}>
        <Link to={"/"}>Torna alla Home</Link>
      </div>
    </div>
  );
}
