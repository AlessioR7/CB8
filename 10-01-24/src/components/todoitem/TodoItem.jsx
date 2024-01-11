import "./index.scss";

const TodoItem = ({ todoData, setListData }) => {
  const onHandleClick = (e) => {
    setListData((prev) => prev.filter((item) => item.id !== todoData.id));
  };

  return (
    <li className="TodoItem" id={todoData.id}>
      <div className="item">
        <p>{todoData.todo}</p>
        <button onClick={onHandleClick}>❌</button>
      </div>
      <div className="separator"></div>
    </li>
  );
};

export default TodoItem;
