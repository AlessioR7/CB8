import { useEffect, useState } from "react";
import httpGET from "@/utils/http";
import UserCard from "../userCard";
import UsersTitle from "../usersTitle";
import styles from "./index.module.scss";

const NotEnabledUsers = ({ showTitle = true }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    httpGET().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <section id="Users not Enabled">
      {showTitle && <UsersTitle title={"Users not Enabled"} />}
      <div className={styles.Container}>
        {users
          .filter((user) => !user.active)
          .map((user) => (
            <UserCard key={user.id} userData={user} />
          ))}
      </div>
    </section>
  );
};

export default NotEnabledUsers;
