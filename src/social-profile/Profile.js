import styles from './Profile.module.css';
function Profile(user) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={user.avatar} alt={user.name} className={styles.avatar} />
          <p className={styles.name}>{user.name}</p>
          <p className={styles.tag}>@{user.tag}</p>
          <p className={styles.location}>{user.location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.statsItem}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>
              {Math.floor(user.stats.followers / 1000) +
                ',' +
                (user.stats.followers % 1000)}
            </span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>
              {Math.floor(user.stats.views / 1000) +
                ',' +
                (user.stats.views % 1000)}
            </span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>
              {Math.floor(user.stats.likes / 1000) +
                ',' +
                (user.stats.likes % 1000)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Profile;
