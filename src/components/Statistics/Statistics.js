import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
function Statistics({ title, stats }) {
  return (
    <div className={styles.container}>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}

        <ul className={styles.statList}>
          {stats.map(stat => (
            <li
              key={stat.id}
              className={styles.item}
              style={{
                backgroundColor:
                  '#' + (Math.random().toString(16) + '000000').substring(2, 8),
              }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default Statistics;
