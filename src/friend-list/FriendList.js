import styles from './FriendsList.module.css';
function FriendList({ friends }) {
  return (
    <div className={styles.container}>
      <ul className={styles.friendsList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FriendList;
