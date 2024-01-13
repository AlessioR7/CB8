import { useState } from "react";
import styles from "./index.module.scss";

const AddTodoInput = ({ setListData }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    let inputText = e.target.value;

    // Modifica la prima lettera del testo in maiuscolo
    inputText = inputText.charAt(0).toUpperCase() + inputText.slice(1);

    // Aggiorna lo stato di "inputValue" con il nuovo testo
    setInputValue(inputText);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setListData((prev) => {
      const newTodo = {
        id: Math.floor(Math.random() * 100) * Date.now(), // Genera un ID univoco
        todo: inputValue,
        completed: false,
        userId: Math.floor(Math.random() * 100), // Genera un ID utente casuale
      };

      return [...prev, newTodo];
    });

    setInputValue("");
  };

  return (
    <form className={styles.AddTodoInput} onSubmit={onHandleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="What is your goal today?🚀🚀"
      />
      <button className={styles.btn} type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddTodoInput;
