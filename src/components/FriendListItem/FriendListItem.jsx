import React from 'react'
import PropTypes from 'prop-types';
import styles from "./FriendListItem.module.css"
const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClass = isOnline ? `${styles.status} ${styles.online}` : `${styles.status} ${styles.offline}`;
  return (
  <li className={styles.item}>
  <span className={statusClass}></span>
  <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{name}</p>
</li>
  )
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem