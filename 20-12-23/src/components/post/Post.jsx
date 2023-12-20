import "./index.css";
import { useState, useEffect } from "react";

const Post = ({ postData, onDelete }) => {
  const { id, title, body, tags, reactions, userId } = postData;

  const [userdata, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userId]);

  return (
    <div className="Post">
      {userdata && (
        <div className="Post__info--user">
          <img src={userdata.image} alt="user-image" />
          <h4>{`${userdata.firstName} ${userdata.lastName}`}</h4>
        </div>
      )}
      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>🎁</span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="Post__delete">
        <button onClick={() => onDelete(id)}>
          🗑️<span>Delete Post</span>{" "}
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Post;
