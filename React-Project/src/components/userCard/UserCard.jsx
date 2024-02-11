import styles from "./index.module.scss";

const UserCard = ({ userData }) => {
  return (
    <div className={styles.UserCard}>
      <div>
        <img
          src="/assets/profile-icon-isolated-white-on-600nw-211470211.webp"
          alt="profile"
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <div className={styles.content}>
          {["Name", "Username", "Email", "Address", "Phone"].map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>
        <div className={styles.data}>
          {[
            userData.name,
            userData.username,
            userData.email,
            userData.address.street,
            userData.phone,
          ].map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
