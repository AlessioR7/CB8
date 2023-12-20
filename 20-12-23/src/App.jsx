import { useState, useEffect } from "react";
import AddPost from "./components/addPost";
import PostList from "./components/postList";
import "./App.css";

function App() {
  const [postListData, setPostListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPostListData(data.posts));
  }, []);

  const onDelete = (id) => {
    setPostListData((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <AddPost setPostListData={setPostListData} />
      <PostList postListData={postListData} onDelete={onDelete} />
    </div>
  );
}

export default App;
