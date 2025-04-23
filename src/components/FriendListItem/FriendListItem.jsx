import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles['friend-card']}>
      <img
        src={avatar}
        alt={name}
        className={styles['friend-avatar']}
      />
      <p className={styles['friend-name']}>{name}</p>
      <div className={styles['status-wrapper']}>
        <span
          className={`${styles['status-text']} ${
            isOnline ? styles.online : styles.offline
          }`}
        >
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
    </li>
  );
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;