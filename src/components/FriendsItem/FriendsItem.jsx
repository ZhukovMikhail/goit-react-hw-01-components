import styles from './FriendItem.module.css';
// import PropTypes from 'prop-types';

function FriendsItem({ friend }) {
  return (
    <>
      <span
        className={styles.status}
        style={
          friend.isOnline
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
      ></span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </>
  );
}

export default FriendsItem;
