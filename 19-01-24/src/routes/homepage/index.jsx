import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";

export default function Homepage() {
  const [lists, setLists] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  const onHandleInputChange = (e) => {
    setBookTitle(e.target.value);
  };

  const onHandleInputSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${bookTitle}`);
  };

  return (
    <div className={styles.Homepage}>
      <form onSubmit={onHandleInputSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={bookTitle}
          onChange={onHandleInputChange}
          placeholder="cerca il tuo libro preferito..."
        />
        <button className={styles.btn} type="submit">
          🔎
        </button>
      </form>
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
      <div className={styles.link}>
        <Link to={"/copyright"} className={styles.text}>
          Vai alla pagina del regolamento
        </Link>
      </div>
    </div>
  );
}
