import { useState } from "react";
import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList";
import { list } from "./components/mocks";
import "./App.scss";

function App() {
  const [listData, setListData] = useState(list);

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <AddTodoInput setListData={setListData} />
      <hr />
      <TodoList list={listData} setListData={setListData} />
    </div>
  );
}

export default App;
