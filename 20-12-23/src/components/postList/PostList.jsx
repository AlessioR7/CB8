import Post from "../post/Post";
import "./index.css";

const PostList = ({ postListData, onDelete }) => {
  return (
    <div className="PostList">
      {postListData.map((post) => (
        <Post postData={post} key={post.id} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;
