import Confetti from "react-confetti";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import styles from "@/styles/Auguri.module.scss";

export default function Auguri() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  const onHandleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Ogni volta viene cambiato il valore dell'input la notifica viene mostrata
  // solo quando l'input perde il focus,cioè quando si finisce di digitare o si
  // clicca al di fuori dell'input, altrimenti se lasciavo tutto nella funzione
  // "onHandleColorChange", la notifica venniva inviata ad ogni lettera scritta
  const onHandleColorBlur = (e) => {
    toast(`Hai cambiato il colore dei coriandoli in ${e.target.value} !!`);
  };

  return (
    <div className={styles.Auguri}>
      <Confetti width={width} height={height} colors={[color]} />
      <input
        type="text"
        value={color}
        onChange={onHandleColorChange}
        onBlur={onHandleColorBlur}
        placeholder="cambia il colore"
        className={styles.input}
      />
      <ToastContainer />
    </div>
  );
}
