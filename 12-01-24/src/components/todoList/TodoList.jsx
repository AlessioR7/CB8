import TodoItem from "../todoItem";
import styles from "./index.module.scss";

const TodoList = ({ list, setListData }) => {
  return (
    <div className={styles.TodoList}>
      {list.map((item) => (
        <TodoItem todoData={item} setListData={setListData} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
