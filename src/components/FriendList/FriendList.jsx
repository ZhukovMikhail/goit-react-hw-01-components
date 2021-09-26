import styles from './FriendsList.module.css';
import FriendsItem from '../FriendsItem/FriendsItem';
import PropTypes from 'prop-types';
function FriendList({ friends }) {
  return (
    <div className={styles.container}>
      <ul className={styles.friendsList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <FriendsItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
