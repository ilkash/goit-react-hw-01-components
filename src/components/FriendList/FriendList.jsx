import FriendListItem from 'components/FriendListItem/FriendListItem'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './FriendList.module.css'
const FriendList = ({friends}) => {
  return (
      <ul className={styles.friend_list}>
          {friends.map((friend) => <FriendListItem key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
          isOnline={friend.isOnline}/>)}
</ul>
  )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
export default FriendList