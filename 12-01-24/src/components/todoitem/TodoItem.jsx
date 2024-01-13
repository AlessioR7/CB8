import styles from "./index.module.scss";
import { useState } from "react";

const TodoItem = ({ todoData, setListData }) => {
  const { id, todo, userId } = todoData;

  const [isCompleted, setIsCompleted] = useState(false);

  const onHandleClick = () => {
    setListData((prev) => prev.filter((item) => item.id !== todoData.id));
  };

  const onHandleChange = () => {
    // Quando la checkbox viene cliccata inverte lo stato di "isCompleted"
    setIsCompleted(!isCompleted);

    // Aggiorna la lista dei dati mappando la lista precedente
    setListData((prev) =>
      prev.map((item) =>
        // Se l'ID dell'elemento corrisponde all'ID del todoData,
        // restituisce un nuovo oggetto con "completed" aggiornato.
        // Altrimenti, restituisce l'elemento non modificato.
        item.id === id ? { ...item, completed: !isCompleted } : item
      )
    );
  };

  return (
    <li className={styles.TodoItem} id={todoData.id}>
      <div className={`${styles.item} ${isCompleted ? styles.active : ""}`}>
        <p>{todo}</p>
        <p>{userId}</p>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isCompleted}
          onChange={onHandleChange}
        />
        <button onClick={onHandleClick}>❌</button>
      </div>
    </li>
  );
};

export default TodoItem;
