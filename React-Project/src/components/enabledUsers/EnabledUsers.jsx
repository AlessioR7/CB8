import { useEffect, useState } from "react";
import httpGET from "@/utils/http";
import UserCard from "../userCard";
import UsersTitle from "../usersTitle";
import style from "./index.module.scss";

const EnabledUsers = ({ showTitle = true }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    httpGET().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <section id="Enabled Users">
      {showTitle && <UsersTitle title={"Enabled Users"} />}
      <div className={style.Container}>
        {users
          .filter((user) => user.active)
          .map((user) => (
            <UserCard key={user.id} userData={user} />
          ))}
      </div>
    </section>
  );
};

export default EnabledUsers;
